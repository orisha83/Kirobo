import {useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
const Web3API = require('web3');
const bip39 = require('bip39');
const hdkey = require('hdkey');

const LoginScreenComp = () =>
{
    const [mnemonic, setMnemonic] = useState("")
    const [path, setPath] = useState("")
    const [balance, setBalance] = useState("")
    const [address, setAddress] = useState("")

    const createAccount = async () =>
    {
        const web3 = new Web3API(new Web3API.providers.HttpProvider('https://mainnet.infura.io/v3/68466f6467864b93a4df5952e9df896f'));
        const seed = await bip39.mnemonicToSeed(mnemonic)
        const hdkey1 = hdkey.fromMasterSeed(Buffer.from(seed, 'hex'))
        const childkey = hdkey1.derive(path)
        const account = web3.eth.accounts.privateKeyToAccount(childkey._privateKey.toString('hex'))
        const wallet = web3.eth.accounts.wallet.add(account);
        const balanceFromAccount = await web3.eth.getBalance(wallet.address)
        setBalance(balanceFromAccount)
        setAddress(wallet.address)
    }

    return (
    <div>
        <Form>
            <Form.Field>
                <label>Mnemonic :</label>
                <input placeholder='Mnemonic' type="text" onChange={e => setMnemonic(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Path :</label>
                <input placeholder='Path' type="text" onChange={e => setPath(e.target.value)}/>
            </Form.Field>
            <Form.Field> 
            <Button onClick={createAccount}>Generate account</Button>
            </Form.Field>
            {balance && 
            <Form.Field>
                <label>Balance</label>
                <input value={balance} type="text"/>
            </Form.Field>}
            {address && <Form.Field>
                <label>Address:</label>
                <input value={address} type="text"/>
            </Form.Field>}
        </Form>
    </div>
    )
}


export default LoginScreenComp;
