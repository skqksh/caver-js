import AccountKeyFail from './packages/caver-account/src/accountKey/accountKeyFail'
import Account, { Account_I } from './packages/caver-account/src/index'
import KeyringContainer from './packages/caver-wallet'
import { Transaction_I } from './packages/caver-transaction'
import { Utils_I } from './packages/caver-utils'
import RPC from './packages/caver-rpc'
import KCT from './packages/caver-kct'
import { ABI_I } from './packages/caver-abi'
import { Contract_I } from './packages/caver-contract'

export class Caver {
    static utils: Utils_I
    constructor(provider: any, net?: any)
    account: Account_I
    wallet: KeyringContainer
    transaction: Transaction_I
    rpc: RPC
    contract: Contract_I
    abi: ABI_I
    kct: KCT
    utils: Utils_I
    /**
     * @version since version v1.5.4
     */
    ipfs: any
    /**
     * @deprecated since version v1.4.1
     */
    klay: Klay_I
}

export default Caver
