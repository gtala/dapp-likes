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
          [chains.sepolia.id]: '0x5AEACa3F8c559C270E38131A986e815F8c667fdB',
        },
      },
    ],
    plugins: [react()],
  }
})