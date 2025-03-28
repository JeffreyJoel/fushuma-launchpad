"use client"

import { useReadContract, useWriteContract, useWatchContractEvent } from 'wagmi';
import { useEffect, useState } from 'react';
import { Launchpad_ABI } from '@/config/abis/LaunchPad';
import { Address, ICODetails, ICOParams, ICOState, TokenValueResult } from "@/config/types/launchpadTypes";
import { LaunchpadContractAddress } from '@/config/addresses';

export function useICOContract() {


  const readContract = (functionName: string, args: any[] = []) =>
    useReadContract({ address: LaunchpadContractAddress, abi: Launchpad_ABI, functionName, args });

  const writeContract = (functionName: string, args: any[], value?: bigint) => {
    const { writeContract, isPending, isSuccess, error, data } = useWriteContract();
    
    const handleWrite = async () => {
      await writeContract({
        address: LaunchpadContractAddress,
        abi: Launchpad_ABI,
        functionName,
        args,
        value,
      });
    };
    
    return { 
      write: handleWrite, 
      isPending, 
      isSuccess, 
      error, 
      data 
    };
  };

  const getCounter = () => readContract('counter');
  
  // Function to fetch all ICOs
  const useAllICOs = () => {
    const { data: counterData, isLoading: counterLoading, error: counterError } = getCounter();
    const [icos, setIcos] = useState<ICODetails[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      const fetchAllICOs = async () => {
        if (counterLoading || counterError || !counterData) return;
        
        try {
          setIsLoading(true);
          const counter = BigInt(counterData.toString());
          const icoPromises = [];
          
          for (let i = BigInt(0); i < counter; i++) {
            icoPromises.push(fetchICODetails(i));
          }
          
          const results = await Promise.all(icoPromises);
          console.log(results);
          
          setIcos(results);
          setIsLoading(false);
        } catch (err) {
          setError(err instanceof Error ? err : new Error('Failed to fetch ICOs'));
          setIsLoading(false);
        }
      };
      
      fetchAllICOs();
    }, [counterData, counterLoading, counterError]);
    
    return { icos, isLoading, error };
  };
  
  const fetchICODetails = async (icoId: bigint): Promise<ICODetails> => {
    const { data } = await readContract('getICO', [icoId]);
    if (!data) throw new Error(`Failed to fetch ICO ${icoId.toString()}`);
    
    const [params, state] = data as [ICOParams, ICOState];
    
    return {
      id: icoId,
      params,
      state
    };
  };

  // Get ICO details by ID
  const useICODetails = (icoId: bigint) => {
    const { data, isLoading, error } = readContract('getICO', [icoId]);
    
    const formattedData = data ? {
      id: icoId,
      params: (data as any)[0] as ICOParams,
      state: (data as any)[1] as ICOState
    } : undefined;
    
    return { data: formattedData, isLoading, error };
  };

  return {
    // Read functions
    getICOParams: (icoId: bigint) => readContract('icoParams', [icoId]),
    getICOState: (icoId: bigint) => readContract('icoState', [icoId]),
    getTokenValue: (icoId: bigint, amount: bigint) => {
      const { data, isLoading, error } = readContract('getValue', [icoId, amount]);
      const formattedData = data ? {
        availableAmount: (data as any)[0] as bigint,
        value: (data as any)[1] as bigint
      } as TokenValueResult : undefined;
      
      return { data: formattedData, isLoading, error };
    },
    getVestingContract: (token: Address) => readContract('vestingContracts', [token]),
    getCounter,
    useICODetails,
    useAllICOs,
    
    // Write functions
    useCreateICO: (params: ICOParams) => writeContract('createICO', [params]),
    useBuyToken: (icoId: bigint, amount: bigint, buyer: Address, value?: bigint) =>
      writeContract('buyToken', [icoId, amount, buyer], value),
    useCloseICO: (icoId: bigint) => writeContract('closeICO', [icoId]),
    
  };
}