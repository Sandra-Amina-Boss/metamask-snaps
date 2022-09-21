import {
  BroadcastTransactionParamsType,
  BroadcastTransactionResponseType,
  GetAddressParamsType,
  GetAddressResponseType,
  SignerGetAddressType,
  SignerSignTransactionType,
  SignTransactionParamsType,
  SignTransactionResponseType,
  SupportedChainIds,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { SignerArgs, SignerInitializeArgs } from '../../common/BaseSigner'
import { broadcastUrls } from '../../common/constants'
import { logger } from '../../common/lib/logger'
import { CosmosSDKSigner } from '../common/CosmosSDKSigner'

export class CosmosSigner extends CosmosSDKSigner<SupportedChainIds.CosmosMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Atom',
      logger: logger.child({
        namespace: ['Snap', 'RPC', 'CosmosSDK', 'Cosmos', 'CosmosSigner.ts'],
      }),
    }
    super(args)
  }

  async initialize(
    { broadcastUrl }: SignerInitializeArgs = {
      broadcastUrl: broadcastUrls.DEFAULT_UNCHAINED_COSMOS_HTTP_URL,
    },
  ) {
    const httpProviderConfiguration = new unchained.cosmos.Configuration({
      basePath: broadcastUrl,
    })
    try {
      this.signer = await this.initializeSigner()
      this.httpProvider = new unchained.cosmos.V1Api(httpProviderConfiguration)
      this.initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }

  async getAddress({
    addressParams,
  }: GetAddressParamsType<SupportedChainIds.CosmosMainnet>): Promise<
    GetAddressResponseType<SupportedChainIds.CosmosMainnet>
  > {
    const { addressNList } = addressParams
    try {
      const address = await this.signer.cosmosGetAddress({
        addressNList,
        showDisplay: false,
      } as SignerGetAddressType<SupportedChainIds.CosmosMainnet>)
      if (address === null) {
        throw new Error('Address generation failed')
      }
      return address
    } catch (error) {
      this.logger.error({ fn: 'getAddress' }, error)
      return Promise.reject(error)
    }
  }

  async signTransaction({
    transaction,
  }: SignTransactionParamsType<SupportedChainIds.CosmosMainnet>): Promise<
    SignTransactionResponseType<SupportedChainIds.CosmosMainnet>
  > {
    try {
      if (!(await this.confirmTransaction(transaction))) {
        throw new Error('User rejected the signing request')
      }
      const signedTransaction = await this.signer.cosmosSignTx(
        transaction as SignerSignTransactionType<SupportedChainIds.CosmosMainnet>,
      )
      if (signedTransaction === null) {
        throw new Error('Transaction signing failed')
      }
      return signedTransaction
    } catch (error) {
      this.logger.error(transaction, { fn: 'signTransaction' }, error)
      return Promise.reject(error)
    }
  }

  async broadcastTransaction({
    transaction,
  }: BroadcastTransactionParamsType<SupportedChainIds.CosmosMainnet>): Promise<
    BroadcastTransactionResponseType<SupportedChainIds.CosmosMainnet>
  > {
    try {
      return (await this.httpProvider.sendTx({
        body: { rawTx: transaction.serialized },
      })) as BroadcastTransactionResponseType<SupportedChainIds.CosmosMainnet>
    } catch (error) {
      this.logger.error(transaction, { fn: 'broadcastTransaction' }, error)
      return Promise.reject(error)
    }
  }
}