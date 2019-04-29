const HDWalletProvider = require("truffle-hdwallet-provider")
const web3 = require('web3')
const mnemonic = "warrior kangaroo tank foil culture such ceiling dawn orchard eternal fetch usual";
const infuraKey = "a2c6c372da78434d9d150bc66ea884aa";
const contractAddress = "0x31e7fAeb080CBa1668C6c69D77892733A759ec7f";
const ownerAddress = "0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277";
const secondAddress = "0x09F3893373342BcDA362dDAcbbaB93B848aF248f";
const network = "rinkeby";

const proofs = require('./proofs');
const ABI = require('./eth-contracts/build/contracts/SolnSquareVerifier').abi;

console.log(proofs)
async function minting(i) {
    const web3js = new web3(new HDWalletProvider(mnemonic, `https://${network}.infura.io/${infuraKey}`));
    if (contractAddress) {
        const nftContract = new web3js.eth.Contract(ABI, contractAddress, { from: ownerAddress, gasLimit: "1000000" });
        try {
            const mintingResponse = await nftContract.methods.mintNewNFT(secondAddress, 5, proofs[i].proof.A,
                proofs[i].proof.A_p,
                proofs[i].proof.B,
                proofs[i].proof.B_p,
                proofs[i].proof.C,
                proofs[i].proof.C_p,
                proofs[i].proof.H,
                proofs[i].proof.K,
                proofs[i].input
            ).send({
                from: ownerAddress,
                gas: 5510328
            });
            console.info('Minting was successful:, ', mintingResponse);
        } catch (err) {
            console.error('error occurred upon minting:', err);
        }
    }
};

for(let i = 0; i <= 4; i++ ) {
    minting(i);
}
