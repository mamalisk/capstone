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
   > transaction hash:    0x9d85fc7a748b074d77d2a465180b916105cddc6356ba88cbfca92b947be05c6d
   > Blocks: 0            Seconds: 8
   > contract address:    0x5e161fe70b89Fb73AdcDe24962FDEA5bc406d4A0
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.2193745
   > gas used:            1717075
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01717075 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xfc418cc926c91b475a41c77014949dca88eb276a3116e470367d9fce72619bbb
   > Blocks: 0            Seconds: 8
   > contract address:    0x83027dfE14E63f59B795D0a9113e00bA4f00DAa8
   > account:             0xfE6B6593Ee06138Ee6Bd2B1C53a7061944dB2277
   > balance:             45.17817128
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
