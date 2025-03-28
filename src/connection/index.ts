import { createAppKit } from '@reown/appkit'
import { SolanaAdapter } from '@reown/appkit-adapter-solana'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { cookieStorage, createStorage } from '@wagmi/core'
import { SolflareWalletAdapter, PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { 
  solana, 
  solanaTestnet, 
  solanaDevnet,
  bsc,
  bscTestnet,
} from '@reown/appkit/networks'

export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || "";

if (!projectId) {
  throw new Error('Project ID is not defined')
}
const networks= [bsc, bscTestnet, solana, solanaTestnet, solanaDevnet]

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const solanaAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
})


export const metadata = {
  name: 'Fushuma Launchpad',
  description: '',
  url: 'https://example.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

export const modal = createAppKit({
  adapters: [wagmiAdapter, solanaAdapter],
  networks: [bsc, bscTestnet, solana, solanaDevnet,solanaTestnet],
  defaultNetwork:bsc,
  metadata: metadata,
  projectId,
  features: {
    analytics: true
  }
})

export const config = wagmiAdapter.wagmiConfig