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
          [chains.polygonMumbai.id]: '0x972690cb42589ecb4b5f7e87429852a2069f728b',
        },
      },
    ],
    plugins: [react()],
  }
})