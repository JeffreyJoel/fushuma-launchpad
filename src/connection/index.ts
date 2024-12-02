import { createAppKit } from '@reown/appkit'
import { SolanaAdapter } from '@reown/appkit-adapter-solana'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { cookieStorage, createStorage } from '@wagmi/core'
import { SolflareWalletAdapter, PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { 
  solana, 
  solanaTestnet, 
  solanaDevnet,
  polygon,
  polygonAmoy, 
  bsc,
  bscTestnet,
} from '@reown/appkit/networks'

// Get projectId from environment variable
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const evmNetworks = [polygon, polygonAmoy, bsc, bscTestnet]
export const solanaNetworks = [solana, solanaTestnet, solanaDevnet]

// Create Wagmi adapter
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks: evmNetworks
})

// Create Solana adapter
export const solanaAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
})

// Set up metadata
export const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://example.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create and export AppKit instance
export const modal = createAppKit({
  adapters: [wagmiAdapter, solanaAdapter],
  networks: [bsc, bscTestnet, polygon, polygonAmoy, solana, solanaDevnet,solanaTestnet],
  metadata: metadata,
  projectId,
  featuredWalletIds:[
    "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79"
  ],
  features: {
    analytics: true
  }
})

export const config = wagmiAdapter.wagmiConfig