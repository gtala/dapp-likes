import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

import { wagmiMintExampleAbi } from './abis/wagmiMintExampleAbi'

export default defineConfig(() => {
  return {
    out: 'src/generated.ts',
    contracts: [
      {
        abi: wagmiMintExampleAbi,
        name: 'WagmiMintExample',
        address: {
          [chains.sepolia.id]: '0x095697f308f6dc2b995563ae39abed4edc5f6ee5',
        },
      },
    ],
    plugins: [react()],
  }
})