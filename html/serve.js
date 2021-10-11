var liveServer = require("live-server");
require("dotenv").config();
const NETWORK = require('../helpers/network');

var params = {
    port: 8080,
    host: "0.0.0.0", 
    root: "html",
    open: true,
    file: "index.html",
    wait: 1000,
    logLevel: 2,
    middleware: [function(req, res, next) {
        if (req.url == '/') {
            res.setHeader('Set-Cookie', [
                `NODE=${NETWORK[process.env.BLOCKCHAIN_NETWORK].node}; Max-Age=3000`,
                `EXPLORER=${NETWORK[process.env.BLOCKCHAIN_NETWORK].explorer}; Max-Age=3000`,
                `CONTRACT_ADDRESS=${process.env.CONTRACT_ADDRESS}; Max-Age=3000`,
                `MORALIS_APP_ID=${process.env.MORALIS_APP_ID}; Max-Age=3000`,
                `MORALIS_SERVER_URL=${process.env.MORALIS_SERVER_URL}; Max-Age=3000`,
                `MORALIS_API_KEY=${process.env.MORALIS_API_KEY}; Max-Age=3000`,
                `MORALIS_API_URL=${process.env.MORALIS_API_URL}; Max-Age=3000`
            ]);
        }
        next();
     }]
};
liveServer.start(params);