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

 Replacing 'Verifier'
   --------------------
   > transaction hash:    0x33097c9cf8fba9566b459f33b76c59834fb543d1aaded1ff2442d13b0500c643
   > Blocks: 0            Seconds: 8
   > contract address:    0x7bB309394aD83C51F949f58f6B4ccDc3236946F6
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             44.842197908
   > gas used:            1717075
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01717075 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xfe748196814ac3ddfa5ebbe99610b2d78ef01c276370fc1a9f1e9212b69874e7
   > Blocks: 0            Seconds: 8
   > contract address:    0xECc9b2FC8a163C252c2D6Cb4870dC9cEf7555374
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             44.800138228
   > gas used:            4205968
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04205968 ETH

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
