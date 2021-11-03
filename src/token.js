const npm = require('npm');
var args = process.argv.slice(2);
require('dotenv').config();

switch (args[0]) {
    case "verify":
        args = ["run", "verify", `NFT@${process.env.CONTRACT_ADDRESS}`];
        break;
    default:
        break;
}

npm.load((err, result) => {
    npm.run("truffle", "--network", process.env.BLOCKCHAIN_NETWORK, ...args, () => {});
});