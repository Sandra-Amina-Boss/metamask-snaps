import { getBIP44AddressKeyDeriver, JsonBIP44CoinTypeNode } from '@metamask/key-tree'
import { Coin, Keyring, slip44ByCoin } from '@shapeshiftoss/hdwallet-core'
import { NativeAdapter, NativeHDWallet } from '@shapeshiftoss/hdwallet-native'
import { Node } from '@shapeshiftoss/hdwallet-native/dist/crypto/isolation/engines/default/bip32'
import { userConfirmParam } from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../lib/logger'
import { metaMaskVersionGreaterThanOrEqualTo } from '../utils'

const moduleLogger = logger.child({ namespace: ['Snap', 'Common.ts'] })

export const testFunction = (): string => {
  return 'return from testFunction().'
}

export const getAddress = async (wallet: any, params: any): Promise<string> => {
  const node = await wallet.request({
    method: `snap_getBip44Entropy_${params.chainId.toString()}`,
  })

  const deriveAddressAtPath = await getBIP44AddressKeyDeriver(node)

  const { address } = await deriveAddressAtPath(params.derivationPath)
  return address
}

export const getHDWalletNativeSigner = async (coin: Coin): Promise<NativeHDWallet | null> => {
  const slip44 = slip44ByCoin(coin)
  if (slip44 === undefined) {
    throw new Error(`Coin type: '${coin}' is invalid or unsupported`)
  }

  const node = await wallet.request({
    method: `snap_getBip32Entropy`,
    params: [
      {
        path: ['m', "44'", `${coin}'`],
        curve: 'secp256k1'
      }
    ],
  })

  try {
    if (node.privateKey === undefined) {
      throw new Error('No private key provided in BIP44CoinTypeNode')
    }

    const addressKeyDeriver = await getBIP44AddressKeyDeriver(node, {
      account: 0,
      change: { index: 0, hardened: false },
    })
    const deriver = await addressKeyDeriver(0)
    const privateKey = deriver.privateKeyBuffer
    const chainCode = deriver.chainCodeBuffer

    const keyring = new Keyring()
    const nativeAdapter = NativeAdapter.useKeyring(keyring)
    await nativeAdapter.initialize()
    const wallet = await nativeAdapter.pairDevice('@shapeshiftoss/metamask-snaps')

    if (wallet === null) {
      throw new Error('Unable to pair ShapeShift Native signer')
    }
    const nativeNode = await Node.create(privateKey, chainCode)
    await wallet.loadDevice({ masterKey: nativeNode })
    return wallet
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'getHDWalletNativeSigner' },
      `Failed to initialize HDWallet signer.`,
    )
  }
  return null
}

export const userConfirm = async (params: userConfirmParam): Promise<boolean> => {
  /**
   * The text area content is limited to 1800 characters. If the transaction
   * contains more than 1800 characters, we need to display multiple
   * confirmation windows to the user.
   */
  const MAX_LENGTH = 1800
  const n = Math.ceil(JSON.stringify(params.textAreaContent, null, 2).length / MAX_LENGTH)
  const textAreaContent = n ? new Array(n) : undefined
  console.info()

  for (let i = 0, j = 0; i < n; ++i, j += MAX_LENGTH) {
    try {
      if (textAreaContent) {
        const start = i * MAX_LENGTH
        /** Technically, this can put the value of 'end' past the end-of-string boundary for 
         * textAreaContent[n-1], but the call to .substring() is safe and writing it this way
         * is cleaner and more readable than adding an explicit string length check. */ 
        const end = start + MAX_LENGTH 
        textAreaContent[i] = params.textAreaContent.substring(start, end)
      }
      // eslint-disable-next-line no-undef, no-await-in-loop
      const ret = await wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: params.prompt,
            description: n > 1 ? `${params.description} (${i + 1} of ${n})` : params.description,
            textAreaContent: textAreaContent ? textAreaContent[i] : undefined,
          },
        ],
      })
      if (!ret) {
        return false
      }
    } catch (error) {
      moduleLogger.error(error, { fn: 'userConfirm' }, 'Could not display confirmation dialog')
      return false
    }
  }
  return true
}
