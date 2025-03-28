import { readContract, writeContract, getPublicClient } from '@wagmi/core';
import { useReadContract, useWriteContract, useWatchContractEvent } from 'wagmi';
import { Launchpad_ABI } from '@/config/abis/LaunchPad';
import { Address, ICODetails, ICOParams, ICOState, TokenValueResult } from "@/config/types/launchpadTypes";
import { LaunchpadContractAddress } from '@/config/addresses';
import { config } from '@/connection';
import { useState, useEffect } from 'react';

/**
 * Fetches all ICOs by reading the contract counter and fetching each ICO detail.
 * Uses non-hook wagmi functions for direct contract interactions outside of React components.
 * @returns A promise that resolves with an array of ICO details.
 */
export async function fetchAllICOs(): Promise<ICODetails[]> {
  try {
    
    try {

      console.log('Attempting to read counter from contract...');
      const counterResult = await readContract(config, {
        address: LaunchpadContractAddress,
        abi: Launchpad_ABI,
        functionName: 'counter',
      }) as bigint;
      
      console.log('Counter result:', counterResult);
      const counter = counterResult;
      
      const maxICOs = 50;
      const actualCount = counter > BigInt(maxICOs) ? BigInt(maxICOs) : counter;
      
      console.log(`Fetching details for ${actualCount} ICOs...`);
      
      // Create an array of promises to fetch each ICO detail
      const icoPromises: Promise<ICODetails>[] = [];
      for (let i = BigInt(0); i < actualCount; i++) {
        icoPromises.push(fetchICODetails(i));
      }
      
      const results = await Promise.all(icoPromises);
      console.log('Successfully fetched all ICO details');
      return results;
    } catch (counterError) {
      console.error('Error reading counter function:', counterError);
      return [];
    }
  } catch (error) {
    console.error('Top level error in fetchAllICOs:', error);
    return [];
  }
}

/**
 * Helper function to fetch details for a single ICO directly from the contract.
 * @param icoId - The ICO identifier.
 * @returns A promise that resolves with the ICO details.
 */
export async function fetchICODetails(icoId: bigint): Promise<ICODetails> {
  try {
    console.log(`Fetching details for ICO ID: ${icoId}`);
    
    const result = await readContract(config, {
      address: LaunchpadContractAddress,
      abi: Launchpad_ABI,
      functionName: 'getICO',
      args: [icoId],
    });

    console.log(`ICO ${icoId} result:`, result);
    
    if (!result) {
      throw new Error(`Failed to fetch ICO ${icoId.toString()} - result is empty`);
    }
    
    try {
      const [params, state] = result as [ICOParams, ICOState];
      const sanitizedDetails = {
        id: icoId.toString(),
        token: params.token,
        startPrice: params.startPrice.toString(),
        isClosed: state.isClosed
      };
      console.log(`Successfully parsed ICO ${icoId} details:`, sanitizedDetails);
      
      return {
        id: icoId,
        params,
        state
      };
    } catch (parseError) {
      console.error(`Error parsing ICO ${icoId} data structure:`, parseError);
      console.log('Raw result type:', typeof result, 'Is array:', Array.isArray(result));
      throw new Error(`Invalid data structure for ICO ${icoId}`);
    }
  } catch (error) {
    console.error(`Error fetching ICO details for ID ${icoId}:`, error);
    throw error;
  }
}

/**
 * Utility function for formatting ICO data for display
 * @param ico - The ICO details object
 * @returns Formatted data for display
 */
export function formatICOData(ico: ICODetails) {
  return {
    id: ico.id,
    token: ico.params.token,
    paymentToken: ico.params.paymentToken,
    amount: ico.params.amount.toString(),
    startPrice: ico.params.startPrice.toString(),
    endPrice: ico.params.endPrice.toString(),
    startDate: new Date(Number(ico.params.startDate) * 1000).toLocaleString(),
    endDate: ico.params.endDate.toString() === '0' 
      ? 'Until sold out' 
      : new Date(Number(ico.params.endDate) * 1000).toLocaleString(),
    owner: ico.state.ICOOwner,
    tokenDecimals: ico.state.icoTokenDecimals,
    isClosed: ico.state.isClosed,
    totalSold: ico.state.totalSold.toString(),
    totalReceived: ico.state.totalReceived.toString(),
  };
}

/**
 * Returns an object containing functions to interact with the ICO contract.
 * Uses non-hook based functions for direct contract interactions outside of React components.
 */
export const ICOContract = {
  // Read functions
  getICOParams: async (icoId: bigint) => {
    return await readContract(config, {
      address: LaunchpadContractAddress,
      abi: Launchpad_ABI,
      functionName: 'icoParams',
      args: [icoId],
    });
  },

  getICOState: async (icoId: bigint) => {
    return await readContract(config, {
      address: LaunchpadContractAddress,
      abi: Launchpad_ABI,
      functionName: 'icoState',
      args: [icoId],
    });
  },

  getTokenValue: async (icoId: bigint, amount: bigint): Promise<TokenValueResult> => {
    const result = await readContract(config, {
      address: LaunchpadContractAddress,
      abi: Launchpad_ABI,
      functionName: 'getValue',
      args: [icoId, amount],
    }) as [bigint, bigint];
    
    return {
      availableAmount: result[0],
      value: result[1],
    };
  },

  getVestingContract: async (token: Address) => {
    return await readContract(config, {
      address: LaunchpadContractAddress,
      abi: Launchpad_ABI,
      functionName: 'vestingContracts',
      args: [token],
    });
  },

  getCounter: async () => {
    return await readContract(config, {
      address: LaunchpadContractAddress,
      abi: Launchpad_ABI,
      functionName: 'counter',
    });
  },

  // Write functions
  createICO: async (params: ICOParams) => {
    return await writeContract(config, {
      address: LaunchpadContractAddress,
      abi: Launchpad_ABI,
      functionName: 'createICO',
      args: [params],
    });
  },

  buyToken: async (icoId: bigint, amount: bigint, buyer: Address, value?: bigint) => {
    return await writeContract(config, {
      address: LaunchpadContractAddress,
      abi: Launchpad_ABI,
      functionName: 'buyToken',
      args: [icoId, amount, buyer],
      value,
    });
  },

  closeICO: async (icoId: bigint) => {
    return await writeContract(config, {
      address: LaunchpadContractAddress,
      abi: Launchpad_ABI,
      functionName: 'closeICO',
      args: [icoId],
    });
  }
};

/**
 * React hooks for use within components.
 * These hooks should only be used inside React components.
 */
export function useLaunchpadContract() {
  const readContractHook = (functionName: string, args: any[] = []) =>
    useReadContract({
      address: LaunchpadContractAddress,
      abi: Launchpad_ABI,
      functionName,
      args,
    });

  const writeContractHook = (functionName: string, args: any[], value?: bigint) => {
    const { writeContractAsync, isPending, isSuccess, error, data } = useWriteContract();
    
    const handleWrite = async () => {
      try {
        return await writeContractAsync({
          address: LaunchpadContractAddress,
          abi: Launchpad_ABI,
          functionName,
          args,
          value,
        });
      } catch (error) {
        console.error(`Error executing ${functionName}:`, error);
        throw error;
      }
    };
    
    return { 
      write: handleWrite, 
      isPending, 
      isSuccess, 
      error, 
      data 
    };
  };

  // Hook to get all ICOs
  const useAllICOs = () => {
    const { data: counterData, isLoading: counterLoading, error: counterError } = 
      readContractHook('counter');
    const [icos, setIcos] = useState<ICODetails[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      const fetchICOs = async () => {
        if (counterLoading || counterError || !counterData) return;
        
        try {
          setIsLoading(true);
          const counter = BigInt(counterData.toString());
          const icoPromises = [];
          
          for (let i = BigInt(0); i < counter; i++) {
            icoPromises.push(fetchICODetails(i));
          }
          
          const results = await Promise.all(icoPromises);
          setIcos(results);
          setIsLoading(false);
        } catch (err) {
          setError(err instanceof Error ? err : new Error('Failed to fetch ICOs'));
          setIsLoading(false);
        }
      };
      
      fetchICOs();
    }, [counterData, counterLoading, counterError]);
    
    return { icos, isLoading, error };
  };

  // Hook to get ICO details by ID
  const useICODetails = (icoId: bigint) => {
    const { data, isLoading, error } = readContractHook('getICO', [icoId]);
    
    const formattedData = data ? {
      id: icoId,
      params: (data as any)[0] as ICOParams,
      state: (data as any)[1] as ICOState
    } : undefined;
    
    return { data: formattedData, isLoading, error };
  };

  // Hook to watch for ICO events
  const useICOEvents = (eventName: string, listener: (logs: any[]) => void) => {
    useWatchContractEvent({
      address: LaunchpadContractAddress,
      abi: Launchpad_ABI,
      eventName,
      onLogs: listener,
    });
  };

  return {
    // Read hooks
    getICOParams: (icoId: bigint) => readContractHook('icoParams', [icoId]),
    getICOState: (icoId: bigint) => readContractHook('icoState', [icoId]),
    getTokenValue: (icoId: bigint, amount: bigint) => {
      const { data, isLoading, error } = readContractHook('getValue', [icoId, amount]);
      
      const formattedData = data ? {
        availableAmount: (data as any)[0] as bigint,
        value: (data as any)[1] as bigint
      } as TokenValueResult : undefined;
      
      return { data: formattedData, isLoading, error };
    },
    getVestingContract: (token: Address) => readContractHook('vestingContracts', [token]),
    getCounter: () => readContractHook('counter'),
    useICODetails,
    useAllICOs,
    useICOEvents,
    
    // Write hooks
    useCreateICO: (params: ICOParams) => writeContractHook('createICO', [params]),
    useBuyToken: (icoId: bigint, amount: bigint, buyer: Address, value?: bigint) =>
      writeContractHook('buyToken', [icoId, amount, buyer], value),
    useCloseICO: (icoId: bigint) => writeContractHook('closeICO', [icoId]),
  };
}