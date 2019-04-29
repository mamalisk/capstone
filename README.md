# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.

## Installation

```bash
   cd eth-contracts && npm install
```

## How to test my code:

Start Ganache:

```bash
ganache-cli -m "shadow estate visa inform tide often puppy comfort stove course garden exist"  -a 45 -l 80000000000
```
and on another terminal tab/window perform the following steps:

```bash
   truffle test test/TestERC721Mintable.sol
   truffle test test/TestSquareVerifier.sol
   truffle test test/TestSolnSquareVerifier.sol
```

## Contract specific info:

### ABI

ABI can be found at `eth-contracts/build/contracts/KostasCapstone.json`.

### Verifier Contract:
```bash
Deploying 'Verifier'
   --------------------
   > transaction hash:    0x9639cca5ffb5c91761901dccda907c03e9f2c592409ce6c42fefecf16681365a
   > Blocks: 0            Seconds: 8
   > contract address:    0x250e0c73F988F609b5c65978e9110489aEcB6e9C
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.344882128
   > gas used:            1717075
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01717075 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xc6493ebf4bdf960471bf9657b67ea10cec054acde9cad274a31cfcbead5a1a6c
   > Blocks: 0            Seconds: 8
   > contract address:    0x31e7fAeb080CBa1668C6c69D77892733A759ec7f
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.303678908
   > gas used:            4120322
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04120322 ETH

```

### OpenSea MarketPlace Site:
https://rinkeby.opensea.io/category/kostascapstone



# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
