const npm = require('npm');
const arg = process.argv.slice(-1)[0];
require('dotenv').config();

npm.load((err, result) => {
    npm.run("truffle", "--network", process.env.BLOCKCHAIN_NETWORK, arg, () => {});
});