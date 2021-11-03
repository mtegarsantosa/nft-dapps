require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');
const ENV = process.env;
const NETWORK = require('./src/helpers/network');

module.exports = {
  contracts_build_directory: "./html/contracts",
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: NETWORK[ENV.BLOCKCHAIN_NETWORK].api_keys,
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      from: ENV.WALLET_ADDRESS
     },
     bscTestnet: {
      provider: () => new HDWalletProvider(ENV.WALLET_MNEMONIC, NETWORK.bscTestnet.node),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      from: ENV.WALLET_ADDRESS,
      skipDryRun: true
    },
    bscMainnet: {
      provider: () => new HDWalletProvider(ENV.WALLET_MNEMONIC, NETWORK.bscMainnet.node),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      from: ENV.WALLET_ADDRESS,
      skipDryRun: true
    },
    // Ropsten Testnet
    ethTestnet: {
      provider: () => new HDWalletProvider(ENV.WALLET_MNEMONIC, NETWORK.ethTestnet.node),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      from: ENV.WALLET_ADDRESS,
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    ethMainnet: {
      provider: () => new HDWalletProvider(ENV.WALLET_MNEMONIC, NETWORK.ethMainnet.node),
      network_id: 1,
      confirmations: 2,
      timeoutBlocks: 200,
      from: ENV.WALLET_ADDRESS,
      skipDryRun: true 
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows: 
  // $ truffle migrate --reset --compile-all
  //
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};
