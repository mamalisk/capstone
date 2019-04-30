const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = 'lazy force country patch truth jar test photo page middle trip knee';

module.exports = {
  networks: {
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },

     rinkeby: {
       provider: function() {
         return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/a2c6c372da78434d9d150bc66ea884aa')
       },
       network_id: 4,
       gas: 4500000,
       gasPrice: 10000000000,
     }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.5.2"
    }
  }
}
