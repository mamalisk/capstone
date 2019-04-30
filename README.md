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
   > transaction hash:    0x052c1d94f1bc0d3a8c567d9ba95308b19658114c5b6ca370389383277b34ac07
   > Blocks: 0            Seconds: 12
   > contract address:    0x0F65E7825067E686219d6Ce37d41f4A3c9c061B4
   > account:             0x09F3893373342BcDA362dDAcbbaB93B848aF248f
   > balance:             18.6670515
   > gas used:            1717075
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01717075 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x314d02d28b110a7820ba1966e605e850430a914226992a635d3793acde19dc39
   > Blocks: 1            Seconds: 12
   > contract address:    0xb62185B7D7819ec581fdE850D11EdbBE536D2421
   > account:             0x09F3893373342BcDA362dDAcbbaB93B848aF248f
   > balance:             18.62476423
   > gas used:            4228727
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04228727 ETH
   
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
