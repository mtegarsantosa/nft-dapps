const NFT = artifacts.require("NFT");
const {setEnvValue} = require("../helpers/env")

module.exports = function (deployer) {
  deployer.deploy(NFT).then(() => {
    setEnvValue("CONTRACT_ADDRESS", NFT.address);
  });
};
