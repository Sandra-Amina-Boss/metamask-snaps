import { SignerArgs } from '../../common/BaseSigner'
import { logger } from '../../common/lib/logger'
import { BroadcastTransactionParamsType, BroadcastTransactionResponseType, SupportedChainIds } from '@shapeshiftoss/metamask-snaps-types'
import { CosmosSDKSigner } from '../common/CosmosSDKSigner'

export class TerraSigner extends CosmosSDKSigner<SupportedChainIds.TerraMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Terra',
      logger: logger.child({ namespace: ['Snap', 'RPC', 'CosmosSDK', 'Terra', 'TerraSigner.ts'] }),
    }
    super(args)
  }

  async initialize(broadcastUrl?: string) {
    try {
      this.signer = await this.initializeSigner()
      this.signerGetAddress = this.signer.terraGetAddress
      this.signerSignTransaction = this.signer.terraSignTx
      this.initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }

  async broadcastTransaction({
    transaction,
  }: BroadcastTransactionParamsType<SupportedChainIds.TerraMainnet>): Promise<BroadcastTransactionResponseType<SupportedChainIds.TerraMainnet>> {
    return Promise.reject(new Error(`Broadcast disabled pending Unchained support for ${this.coin}.`))
  }
}
