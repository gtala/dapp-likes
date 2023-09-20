import { configureChains, createConfig } from 'wagmi'
import { sepolia, mainnet } from 'wagmi/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === 'development' ? [sepolia] : [])],
  [
    publicProvider(),
  ],
)

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  publicClient,
  webSocketPublicClient,
})