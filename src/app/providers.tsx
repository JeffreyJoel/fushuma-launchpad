"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type State, WagmiProvider } from "wagmi";
import { ReactNode } from "react";
import ToastProvider from "@/providers/ToastProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { modal, wagmiAdapter, config } from '@/connection'

type Props = {
  children: ReactNode,
  initialState?: State | undefined,
}

const queryClient = new QueryClient()

export function Providers({ children }: Props) {
  return (
    <WagmiProvider config={config} >
      <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class">
            <ToastProvider>
              {children}
            </ToastProvider>
          </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
