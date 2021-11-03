require('dotenv').config();
const ENV = process.env;

module.exports = {
    development: {
        node: "*",
        explorer: "*",
        api_params: {
            chain: "*"
        },
        api_keys: {}
    },
    bscTestnet: {
        node: "https://speedy-nodes-nyc.moralis.io/0899f85a180ace99d8358a78/bsc/testnet",
        explorer: "https://testnet.bscscan.com",
        api_params: {
            chain: "bsc testnet"
        },
        api_keys: {
            bscscan: ENV.BLOCKCHAIN_NETWORK_API_KEY
        }
    },
    bscMainnet: {
        node: "https://speedy-nodes-nyc.moralis.io/0899f85a180ace99d8358a78/bsc/mainnet",
        explorer: "https://bscscan.com",
        api_params: {
            chain: "bsc"
        },
        api_keys: {
            bscscan: ENV.BLOCKCHAIN_NETWORK_API_KEY
        }
    },
    ethTestnet: {
        node: "https://speedy-nodes-nyc.moralis.io/0899f85a180ace99d8358a78/eth/ropsten",
        explorer: "https://ropsten.etherscan.io",
        api_params: {
            chain: "ropsten"
        },
        api_keys: {
            etherscan: ENV.BLOCKCHAIN_NETWORK_API_KEY
        }
    },
    ethMainnet: {
        node: "https://speedy-nodes-nyc.moralis.io/0899f85a180ace99d8358a78/eth/mainnet",
        explorer: "https://etherscan.io",
        api_params: {
            chain: "eth"
        },
        api_keys: {
            etherscan: ENV.BLOCKCHAIN_NETWORK_API_KEY
        }
    },
}