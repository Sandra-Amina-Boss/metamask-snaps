export {
  BinanceGetAddress,
  BinanceSignedTx as BinanceSignedTransaction,
  BinanceSignTx as BinanceSignTransaction,
  BTCGetAddress as BitcoinCashGetAddress,
  BTCSignedMessage as BitcoinCashSignedMessage,
  BTCSignedTx as BitcoinCashSignedTransaction,
  BTCSignMessage as BitcoinCashSignMessage,
  BTCSignTx as BitcoinCashSignTransaction,
  BTCVerifyMessage as BitcoinCashVerifyMessage,
  BTCGetAddress as BitcoinGetAddress,
  BTCSignedMessage as BitcoinSignedMessage,
  BTCSignedTx as BitcoinSignedTransaction,
  BTCSignMessage as BitcoinSignMessage,
  BTCSignTx as BitcoinSignTransaction,
  BTCVerifyMessage as BitcoinVerifyMessage,
  CosmosGetAddress,
  CosmosSignedTx as CosmosSignedTransaction,
  CosmosSignTx as CosmosSignTransaction,
  BTCGetAddress as DogecoinGetAddress,
  BTCSignedMessage as DogecoinSignedMessage,
  BTCSignedTx as DogecoinSignedTransaction,
  BTCSignMessage as DogecoinSignMessage,
  BTCSignTx as DogecoinSignTransaction,
  BTCVerifyMessage as DogecoinVerifyMessage,
  ETHGetAddress as EthereumGetAddress,
  ETHSignedMessage as EthereumSignedMessage,
  ETHSignedTx as EthereumSignedTransaction,
  ETHSignMessage as EthereumSignMessage,
  ETHSignTx as EthereumSignTransaction,
  ETHVerifyMessage as EthereumVerifyMessage,
  KavaGetAddress,
  KavaSignedTx as KavaSignedTransaction,
  KavaSignTx as KavaSignTransaction,
  BTCGetAddress as LitecoinGetAddress,
  BTCSignedMessage as LitecoinSignedMessage,
  BTCSignedTx as LitecoinSignedTransaction,
  BTCSignMessage as LitecoinSignMessage,
  BTCSignTx as LitecoinSignTransaction,
  BTCVerifyMessage as LitecoinVerifyMessage,
  OsmosisGetAddress,
  OsmosisSignedTx as OsmosisSignedTransaction,
  OsmosisSignTx as OsmosisSignTransaction,
  SecretGetAddress,
  SecretSignedTx as SecretSignedTransaction,
  SecretSignTx as SecretSignTransaction,
  TerraGetAddress,
  TerraSignedTx as TerraSignedTransaction,
  TerraSignTx as TerraSignTransaction,
  ThorchainGetAddress,
  ThorchainSignedTx as ThorchainSignedTransaction,
  ThorchainSignTx as ThorchainSignTransaction,
} from '@shapeshiftoss/hdwallet-core'

export interface WalletEnableParam {
  [snapId: string]: {
    version?: string
  }
  permissionName?: Record<string, never>
}

export interface userConfirmParam {
  prompt: string
  description: string
  textAreaContent: string
}

export interface WalletEnableResult {
  // The user's Ethereum accounts, if the eth_accounts permission has been
  // granted.
  accounts: string[]
  // The permissions granted to the requester.
  permissions: any[]
  // The user's installed snaps that the requester is permitted to access.
  snaps: any
  errors?: Error[] // Any errors encountered during processing.
}

export interface EnableShapeShiftSnapResult {
  success: boolean
  message: WalletEnableResult
}
