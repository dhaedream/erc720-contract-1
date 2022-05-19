// pull in contracts with artifacts .
const Chaingang = artifacts.require("ChainGang");

module.exports = function (deployer) {
  deployer.deploy(Chaingang, 1000000);
};
