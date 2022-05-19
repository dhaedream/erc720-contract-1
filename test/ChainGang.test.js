const ChainGang = artifacts.require("ChainGang");

contract("ChainGang", (accounts) => {
  console.log(accounts);

  before(async () => {
    chaingang = await Chaingang.deployed();
  });
  it("gives the owner 1m tokens", async () => {
    let balance = await chaingang.balanceOf(accounts[0]);
  });
});
