// pull in contracts with artifacts .
const Chaingang = artifacts.require("Chaingang");

module.exports = function (deployer) {
  deployer.deploy(Chaingang, 1000000);
};
