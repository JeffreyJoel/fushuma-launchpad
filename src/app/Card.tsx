import { useEffect, useState } from "react";
import Image from "next/image";
import { nativeTokens } from "@/config/token-lists/nativeTokens";
import { formatFloat } from "@/other/formatFloat";
import { formatUnits } from "viem";
import { useICOContract } from "@/hooks/useLaunchPad";
import { useReadContract } from "wagmi";
import { ERC20_ABI } from "@/config/abis/erc20";
import { Address } from "@/config/types/launchpadTypes";

interface Props {
  children: {
    logo: string;
    minDescription: string;
    saleType: string;
    chains: Record<number, {
      tokenAddress: Address;
      icoContract: Address;
      currencies: {
        useNativeAsPayment: boolean;
        nativePrice: number;
        tokens?: [{ token: { symbol: string; address: string }; price: number }];
      };
    }>;
  };
  onClick: (data: any) => void;
  cardState: (data: { state: string; index: number }) => void;
  cardIndex: number;
  icoId: bigint;
}

function Card({ children, onClick, cardState, cardIndex, icoId }: Props) {
  // UI states
  const [transformState, setTransformState] = useState("");
  const [labelState, setLabelState] = useState("Loading");
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<string | null>(null);
  const [statusText, setStatusText] = useState("Loading...");
  
  // Since we're only using one chain, we'll get the first chain from the object
  const chainKey = Object.keys(children.chains)[0] as unknown as number;
  
  // Launchpad specifics from props
  const supportedChain = children.chains[chainKey];
  const tokenAddress = supportedChain?.tokenAddress;
  const icoContract = supportedChain?.icoContract;
  
  // Token details
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [decimals, setDecimals] = useState(0);
  const [price, setPrice] = useState<string>("0");
  const [currentCurrency, setCurrentCurrency] = useState("");
  
  // Chain info
  const chainInfo = nativeTokens[Number(chainKey)];
  
  // Use the ICO Contract hook
  const { useICODetails } = useICOContract();
  const { data: icoData, isLoading: icoLoading } = useICODetails(icoId);
  
  // Read token details with proper error handling
  const { data: nameData } = useReadContract({
    abi: ERC20_ABI,
    address: tokenAddress,
    functionName: "name",
  });

  const { data: symbolData } = useReadContract({
    abi: ERC20_ABI,
    address: tokenAddress,
    functionName: "symbol",
  });

  const { data: decimalsData } = useReadContract({
    abi: ERC20_ABI,
    address: tokenAddress,
    functionName: "decimals",
  });

  // Explorer links helpers
  const getExplorerLink = (type: 'token' | 'contract', address: Address): string => {
    const baseUrl = 
      chainKey === 56 ? "https://bttcscan.com/" :
      chainKey === 820 ? "https://explorer.callisto.network/" :
      chainKey === 61 ? "https://etc.blockscout.com/" :
      "";
    
    return `${baseUrl}${type === 'token' ? 'token' : 'address'}/${address}`;
  };

  // Format numbers with commas
  const formatNumber = (num: number | undefined): string => {
    if (num === undefined) return '0';
    return new Intl.NumberFormat().format(num);
  };

  // Card animation on mount
  useEffect(() => {
    setTimeout(() => {
      setTransformState("scale(1)");
    }, 200);
    return () => {
      setTransformState("scale(0)");
    };
  }, []);

  // Set token details when data loads
  useEffect(() => {
    if (nameData) setName(nameData as string);
    if (symbolData) setSymbol(symbolData as string);
    if (decimalsData) setDecimals(Number(decimalsData));
  }, [nameData, symbolData, decimalsData]);

  // Set payment token and price
  useEffect(() => {
    if (!supportedChain) return;
    
    if (supportedChain.currencies.useNativeAsPayment) {
      setCurrentCurrency(String(chainInfo?.symbol || "ETH"));
      setPrice(formatNumber(supportedChain.currencies.nativePrice));
    } else if (supportedChain.currencies.tokens?.[0]) {
      const token = supportedChain.currencies.tokens[0];
      setCurrentCurrency(token.token.symbol);
      setPrice(formatNumber(token.price));
    }
  }, [supportedChain, chainInfo]);

  // Track the previous label state to avoid repeated cardState calls
  const [prevLabelState, setPrevLabelState] = useState<string | null>(null);

  // Process ICO data and update timer
  useEffect(() => {
    if (!icoLoading && icoData && decimals > 0) {
      const { state, params } = icoData;
      
      // Calculate progress
      const totalTokens = Number(formatFloat(formatUnits(params.amount, decimals)));
      const soldTokens = Number(formatFloat(formatUnits(state.totalSold, decimals)));
      const progressPercentage = Math.min(Math.floor((soldTokens / totalTokens) * 100), 100);
      setProgress(progressPercentage);
      
      // Determine ICO status
      const now = Math.floor(Date.now() / 1000);
      const startTime = Number(params.startDate);
      const endTime = Number(params.endDate);
      
      let newLabelState = "";
      
      if (state.isClosed || (progressPercentage >= 100)) {
        newLabelState = "Ended";
        setLabelState(newLabelState);
        setStatusText("Completed");
        setTimeRemaining(null);
      } else if (now < startTime) {
        newLabelState = "Soon";
        setLabelState(newLabelState);
        setStatusText("Starts in");
      } else if (now >= startTime && (endTime === 0 || now < endTime)) {
        newLabelState = "Live";
        setLabelState(newLabelState);
        setStatusText("Ends in");
      } else {
        newLabelState = "Ended";
        setLabelState(newLabelState);
        setStatusText("Completed");
        setTimeRemaining(null);
      }
      
      // Only notify parent if state has changed
      if (prevLabelState !== newLabelState) {
        setPrevLabelState(newLabelState);
        cardState({ state: newLabelState, index: cardIndex });
      }
      
      // Update remaining time
      const updateRemainingTime = () => {
        const now = Math.floor(Date.now() / 1000);
        let remainingSeconds;
        
        if (now < startTime) {
          remainingSeconds = startTime - now;
        } else if (endTime > 0 && now < endTime) {
          remainingSeconds = endTime - now;
        } else {
          setTimeRemaining(null);
          return;
        }
        
        // Format time remaining
        const days = Math.floor(remainingSeconds / 86400);
        const hours = Math.floor((remainingSeconds % 86400) / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        
        if (days > 0) {
          setTimeRemaining(`${days} Day(s) and ${hours} Hour(s)`);
        } else if (hours > 0) {
          setTimeRemaining(`${hours} Hour(s) and ${minutes} Minute(s)`);
        } else {
          setTimeRemaining(`${minutes} Minute(s)`);
        }
      };
      
      updateRemainingTime();
      const interval = setInterval(updateRemainingTime, 60000);
      return () => clearInterval(interval);
    }
  }, [icoData, icoLoading, decimals, cardIndex, cardState, prevLabelState]);

  // Send data to details page
  const handleViewDetails = () => {
    onClick({
      ico: icoData,
      name,
      symbol,
      decimals,
      tokenAddress
    });
  };

  // Render card
  return (
    <li
      className={`launchpad launchpad-${labelState.toLowerCase()}`}
      style={{ transform: transformState }}
    >
      {/* Status Label */}
      <div className={`state-label state-label-${labelState.toLowerCase()}`}>
        <div className="marker"></div>
        <p>{labelState}</p>
      </div>

      {/* Header with Token Info */}
      <h3 className={Object.keys(children.chains).length === 2 ? "two-chains" : ""}>
        {/* <img width="61" src={children.logo} alt={`${symbol || 'Token'} logo`} /> */}
        
        {/* Chain Icon */}
        {/* <Image
          className="chainLogo"
          src={nativeTokens[Number(chainKey)]?.logoURI || '/default-chain.png'}
          width={26}
          height={26}
          alt="chain"
        /> */}
        
        {/* Token Name and Price */}
        {name || 'Unknown Token'} <span>({symbol || '???'})</span>
        <p>
          1 {currentCurrency || 'ETH'} = {price || '0'} {symbol || '???'}
        </p>
      </h3>
      
      {/* Progress Section */}
      <br />
      <b>Completion ({progress}%)</b>
      <div
        className={`state-label state-label-responsive state-label-${labelState.toLowerCase()}`}
      >
        <div className="marker"></div>
        <p>{labelState}</p>
      </div>
      <br />
      <div className="progress-bar">
        <div className="colored-part" style={{ width: `${progress}%` }}>
          <div className="white-flash"></div>
        </div>
      </div>
      
      {/* Description */}
      <br />
      <em>{children.minDescription}</em>
      
      {/* Token Address */}
      <p style={{ marginTop: "21px" }}>
        <b className="launchpad-link-title">Token Address </b>
        {tokenAddress ? (
          <a
            target="_blank"
            href={getExplorerLink('token', tokenAddress)}
            className="inline-flex items-center gap-1 relative after:absolute after:left-0 after:w-0 after:h-[1px] after:block after:bg-green after:bottom-0 after:duration-300 hover:after:w-full"
          >
            {tokenAddress}{" "}
            <svg style={{ width: "20px", height: "20px" }}>
              <use href="/sprite.svg#arrow-popup"></use>
            </svg>
          </a>
        ) : (
          <span>Not available</span>
        )}
      </p>
      
      {/* Contract Address */}
      <p style={{ marginTop: "20px" }}>
        <b className="launchpad-link-title">{children.saleType} Contract </b>
        {icoContract ? (
          <a
            target="_blank"
            href={getExplorerLink('contract', icoContract)}
            className="inline-flex items-center gap-1 relative after:absolute after:left-0 after:w-0 after:h-[1px] after:block after:bg-red after:bottom-0 after:duration-300 hover:after:w-full"
          >
            {icoContract}{" "}
            <svg style={{ width: "20px", height: "20px" }}>
              <use href="/sprite.svg#arrow-popup"></use>
            </svg>
          </a>
        ) : (
          <span>Not available</span>
        )}
      </p>
      
      {/* Details Button */}
      <br />
      <button
        onClick={handleViewDetails}
        className="h-10 rounded-25 px-6 font-medium border border-red duration-200 flex items-center gap-1 justify-center disabled:bg-transparent disabled:text-grey-light disabled:border-grey-light text-primary-text bg-transparent hover:bg-red/20 false false"
      >
        Details
      </button>
      
      {/* Timer Display */}
      <p className={`timer ${!timeRemaining ? "ended" : ""}`}>
        {!timeRemaining ? null : `${statusText}:`}
        <br />
        <b>{!timeRemaining ? "Completed." : timeRemaining}</b>
      </p>
    </li>
  );
}

export default Card;