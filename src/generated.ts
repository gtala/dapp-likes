import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WagmiMintExample
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5AEACa3F8c559C270E38131A986e815F8c667fdB)
 */
export const wagmiMintExampleABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'retrieveDate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'retrieveLikes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'store',
    outputs: [],
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5AEACa3F8c559C270E38131A986e815F8c667fdB)
 */
export const wagmiMintExampleAddress = {
  11155111: '0x5AEACa3F8c559C270E38131A986e815F8c667fdB',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5AEACa3F8c559C270E38131A986e815F8c667fdB)
 */
export const wagmiMintExampleConfig = {
  address: wagmiMintExampleAddress,
  abi: wagmiMintExampleABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmiMintExampleABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5AEACa3F8c559C270E38131A986e815F8c667fdB)
 */
export function useWagmiMintExampleRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof wagmiMintExampleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof wagmiMintExampleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  return useContractRead({
    abi: wagmiMintExampleABI,
    address: wagmiMintExampleAddress[11155111],
    ...config,
  } as UseContractReadConfig<
    typeof wagmiMintExampleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"retrieveDate"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5AEACa3F8c559C270E38131A986e815F8c667fdB)
 */
export function useWagmiMintExampleRetrieveDate<
  TFunctionName extends 'retrieveDate',
  TSelectData = ReadContractResult<typeof wagmiMintExampleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof wagmiMintExampleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  return useContractRead({
    abi: wagmiMintExampleABI,
    address: wagmiMintExampleAddress[11155111],
    functionName: 'retrieveDate',
    ...config,
  } as UseContractReadConfig<
    typeof wagmiMintExampleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"retrieveLikes"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5AEACa3F8c559C270E38131A986e815F8c667fdB)
 */
export function useWagmiMintExampleRetrieveLikes<
  TFunctionName extends 'retrieveLikes',
  TSelectData = ReadContractResult<typeof wagmiMintExampleABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof wagmiMintExampleABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  return useContractRead({
    abi: wagmiMintExampleABI,
    address: wagmiMintExampleAddress[11155111],
    functionName: 'retrieveLikes',
    ...config,
  } as UseContractReadConfig<
    typeof wagmiMintExampleABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5AEACa3F8c559C270E38131A986e815F8c667fdB)
 */
export function useWagmiMintExampleWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wagmiMintExampleAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wagmiMintExampleABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<
        typeof wagmiMintExampleABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  return useContractWrite<typeof wagmiMintExampleABI, TFunctionName, TMode>({
    abi: wagmiMintExampleABI,
    address: wagmiMintExampleAddress[11155111],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"store"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5AEACa3F8c559C270E38131A986e815F8c667fdB)
 */
export function useWagmiMintExampleStore<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof wagmiMintExampleAddress,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof wagmiMintExampleABI,
          'store'
        >['request']['abi'],
        'store',
        TMode
      > & { address?: Address; chainId?: TChainId; functionName?: 'store' }
    : UseContractWriteConfig<typeof wagmiMintExampleABI, 'store', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'store'
      } = {} as any,
) {
  return useContractWrite<typeof wagmiMintExampleABI, 'store', TMode>({
    abi: wagmiMintExampleABI,
    address: wagmiMintExampleAddress[11155111],
    functionName: 'store',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5AEACa3F8c559C270E38131A986e815F8c667fdB)
 */
export function usePrepareWagmiMintExampleWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wagmiMintExampleABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: wagmiMintExampleABI,
    address: wagmiMintExampleAddress[11155111],
    ...config,
  } as UsePrepareContractWriteConfig<typeof wagmiMintExampleABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link wagmiMintExampleABI}__ and `functionName` set to `"store"`.
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5AEACa3F8c559C270E38131A986e815F8c667fdB)
 */
export function usePrepareWagmiMintExampleStore(
  config: Omit<
    UsePrepareContractWriteConfig<typeof wagmiMintExampleABI, 'store'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof wagmiMintExampleAddress } = {} as any,
) {
  return usePrepareContractWrite({
    abi: wagmiMintExampleABI,
    address: wagmiMintExampleAddress[11155111],
    functionName: 'store',
    ...config,
  } as UsePrepareContractWriteConfig<typeof wagmiMintExampleABI, 'store'>)
}
