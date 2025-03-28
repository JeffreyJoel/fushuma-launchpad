export type ChainDetails = {
  tokenAddress: `0x${string}`;
  icoContract: `0x${string}`;
  vestingContract: `0x${string}`;
  currencies: {useNativeAsPayment: boolean, nativePrice: number, tokens: object[]}
}

export type Launchpad = {
  chains: {[key: string]: ChainDetails};
  saleType: string;
  logo: string;
  description: string;
  supply: string;
  softCap: string;
  hardCap: string;
  endDate: string;
  website: string;
  twitter: string;
  telegram: string;
  minDescription: string;
};



export type Address = `0x${string}`;
export interface VestingParams {
  unlockPercentage: bigint;  
  cliffPeriod: bigint;        
  vestingPercentage: bigint;  
  vestingInterval: bigint;    
}

export interface ICOParams {
  token: Address;             // ICO token address
  paymentToken: Address;      // payment token (address(0) for native coin)
  amount: bigint;             // amount of tokens to sell
  startPrice: bigint;         // price of 1 token in payment tokens
  endPrice: bigint;           // if 0 then price is fixed, otherwise grows linearly
  startDate: bigint;          // timestamp when ICO starts
  endDate: bigint;            // timestamp when ICO ends (0 means until all tokens sold)
  bonusReserve: bigint;       // amount of tokens for bonuses
  bonusPercentage: bigint;    // percentage of bonus with 2 decimals
  bonusActivator: bigint;     
  vestingParams: VestingParams; 
}

export interface ICOState {
  ICOOwner: Address;          // address of ICO owner
  icoTokenDecimals: number;   // number of decimals of ICO token
  vestingContract: Address;   // address of vesting contract
  isClosed: boolean;          // whether ICO is closed
  totalSold: bigint;          // total amount of sold tokens
  totalReceived: bigint;      // total amount received (in payment token)
}

export interface ICODetails {
  id: bigint;
  params: ICOParams;
  state: ICOState;
}

export interface TokenValueResult {
  availableAmount: bigint;    // amount of available tokens
  value: bigint;              // value to pay in payment token
}