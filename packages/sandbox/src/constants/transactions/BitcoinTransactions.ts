import * as core from '@shapeshiftoss/hdwallet-core'

export const BitcoinTransactions: any = {
  address: {
    coin: 'Bitcoin',
    addressNList: [0x80000000 + 44, 0x80000000 + 0, 0x80000000 + 0, 0, 0],
    scriptType: core.BTCInputScriptType.SpendAddress,
  },
  tx: {
    coin: 'Bitcoin',
    inputs: [
      {
        addressNList: [0x80000000 + 44, 0x80000000 + 0, 0x80000000 + 0, 0, 0],
        scriptType: 'p2pkh',
        amount: String(10000),
        vout: 1,
        txid: 'b3002cd9c033f4f3c2ee5a374673d7698b13c7f3525c1ae49a00d2e28e8678ea',
        tx: {
          txid: 'b3002cd9c033f4f3c2ee5a374673d7698b13c7f3525c1ae49a00d2e28e8678ea',
          hash: 'b3002cd9c033f4f3c2ee5a374673d7698b13c7f3525c1ae49a00d2e28e8678ea',
          version: 1,
          size: 257,
          vsize: 257,
          weight: 1028,
          locktime: 0,
          vin: [
            {
              txid: 'a3b6284d252846ce8305d50edd7239831dc291716ec1752918d876d6ea05f681',
              vout: 1,
              n: 0,
              scriptSig: {
                asm: '304402207f3220930276204c83b1740bae1da18e5a3fa2acad34944ecdc3b361b419e3520220598381bdf8273126e11460a8c720afdbb679233123d2d4e94561f75e9b280ce3[ALL] 045da61d81456b6d787d576dce817a2d61d7f8cb4623ee669cbe711b0bcff327a3797e3da53a2b4e3e210535076c087c8fb98aef60e42dfeea8388435fc99dca43',
                hex: '47304402207f3220930276204c83b1740bae1da18e5a3fa2acad34944ecdc3b361b419e3520220598381bdf8273126e11460a8c720afdbb679233123d2d4e94561f75e9b280ce30141045da61d81456b6d787d576dce817a2d61d7f8cb4623ee669cbe711b0bcff327a3797e3da53a2b4e3e210535076c087c8fb98aef60e42dfeea8388435fc99dca43',
              },
              sequence: 4294967295,
              addr: '1ParaEza5Ew5ioT5c8zR2wSSvArqiSQbpT',
              valueSat: 989000,
              value: 0.00989,
            },
          ],
          vout: [
            {
              value: '0.00978000',
              n: 0,
              scriptPubKey: {
                asm: 'OP_DUP OP_HASH160 f7b9e0239571434f0ccfdba6f772a6d23f2cfb13 OP_EQUALVERIFY OP_CHECKSIG',
                hex: '76a914f7b9e0239571434f0ccfdba6f772a6d23f2cfb1388ac',
                reqSigs: 1,
                addresses: ['1ParaEza5Ew5ioT5c8zR2wSSvArqiSQbpT'],
                type: 'pubkeyhash',
              },
              spentTxId: '171113f0745f570d18199efcb944b8f742fc590c700a41968081c5655338e4fc',
              spentIndex: 0,
              spentHeight: 355935,
            },
            {
              value: '0.00010000',
              n: 1,
              scriptPubKey: {
                asm: 'OP_DUP OP_HASH160 9c9d21f47382762df3ad81391ee0964b28dd9517 OP_EQUALVERIFY OP_CHECKSIG',
                hex: '76a9149c9d21f47382762df3ad81391ee0964b28dd951788ac',
                reqSigs: 1,
                addresses: ['1FH6ehAd5ZFXCM1cLGzHxK1s4dGdq1JusM'],
                type: 'pubkeyhash',
              },
              spentTxId: '84da2a3cc29a3e0fb8a3a28882c6fb59a426a95952d484ec2422c5a47b6f93d4',
              spentIndex: 2,
              spentHeight: 370585,
            },
          ],
          blockhash: '000000000000000005c60c504e109684bb0886ab95520ad6a5af0d384f587a6a',
          blockheight: 335414,
          confirmations: 258975,
          time: 1419279547,
          blocktime: 1419279547,
          valueOut: 0.00988,
          valueIn: 0.00989,
          fees: 0.00001,
        },
        hex: '010000000181f605ead676d8182975c16e7191c21d833972dd0ed50583ce4628254d28b6a3010000008a47304402207f3220930276204c83b1740bae1da18e5a3fa2acad34944ecdc3b361b419e3520220598381bdf8273126e11460a8c720afdbb679233123d2d4e94561f75e9b280ce30141045da61d81456b6d787d576dce817a2d61d7f8cb4623ee669cbe711b0bcff327a3797e3da53a2b4e3e210535076c087c8fb98aef60e42dfeea8388435fc99dca43ffffffff0250ec0e00000000001976a914f7b9e0239571434f0ccfdba6f772a6d23f2cfb1388ac10270000000000001976a9149c9d21f47382762df3ad81391ee0964b28dd951788ac00000000',
      },
    ],
    outputs: [
      {
        address: '1MJ2tj2ThBE62zXbBYA5ZaN3fdve5CPAz1',
        addressType: 'spend',
        scriptType: 'p2pkh',
        amount: String(10000 - 1000),
        isChange: false,
      },
    ],
    version: 1,
    locktime: 0,
  },
  sign: {
    addressNList: [0x80000000 + 44, 0x80000000 + 0, 0x80000000 + 0, 0, 0],
    coin: 'Bitcoin',
    scriptType: 'p2pkh',
    message: 'pastaghost was here.',
  },
  verify: {
    address: '1FH6ehAd5ZFXCM1cLGzHxK1s4dGdq1JusM',
    coin: 'Bitcoin',
    signature:
      '20a037c911044cd6c851b6508317d8892067b0b62074b2cf1c0df9abd4aa053a3c243ffdc37f64d7af2c857128eafc81947c380995596615e5dcc313a15f512cdd',
    message: 'Hello World',
  },
  broadcast: {
    signatures: [
      '30450221009b026a1dc0216421614bf5da8f9ea43b6960420a956a4381ae997aa39e35e66402206cc2d91e509284657ddf84ed1a0ef1d6f4c0836a0ce365af0e3fcfa2fee19b84',
    ],
    serializedTx:
      '0100000001ea78868ee2d2009ae41a5c52f3c7138b69d77346375aeec2f3f433c0d92c00b3010000006b4830450221009b026a1dc0216421614bf5da8f9ea43b6960420a956a4381ae997aa39e35e66402206cc2d91e509284657ddf84ed1a0ef1d6f4c0836a0ce365af0e3fcfa2fee19b840121027a4cebff51c97c047637cda66838e8b64421a4af6bf8ef3c99717f92d09b3c1dffffffff0128230000000000001976a914de9b2a8da088824e8fe51debea566617d851537888ac00000000',
  },
}
