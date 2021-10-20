module.exports = {
    development: {
        node: "*",
        explorer: "*",
        api_params: {
            chain: "*"
        }
    },
    bscTestnet: {
        node: "https://speedy-nodes-nyc.moralis.io/0899f85a180ace99d8358a78/bsc/testnet",
        explorer: "https://testnet.bscscan.com",
        api_params: {
            chain: "bsc testnet"
        }
    },
    bscMainnet: {
        node: "https://speedy-nodes-nyc.moralis.io/0899f85a180ace99d8358a78/bsc/mainnet",
        explorer: "https://bscscan.com",
        api_params: {
            chain: "bsc"
        }
    },
    ethTestnet: {
        node: "https://speedy-nodes-nyc.moralis.io/0899f85a180ace99d8358a78/eth/ropsten",
        explorer: "https://ropsten.etherscan.io",
        api_params: {
            chain: "ropsten"
        }
    },
    ethMainnet: {
        node: "https://speedy-nodes-nyc.moralis.io/0899f85a180ace99d8358a78/eth/mainnet",
        explorer: "https://etherscan.io",
        api_params: {
            chain: "eth"
        }
    },
}