const ChainGang = artifacts.require("ChainGang");

contract("ChainGang", (accounts) => {
  console.log(accounts);

  before(async () => {
    chaingang = await ChainGang.deployed();
  });
  it("gives the owner 1m tokens", async () => {
    let balance = await chaingang.balanceOf(accounts[0]);
    balance = web3.utils.fromWei(balance, "etherr..!");
    assert.equal(
      balance,
      "1000000",
      "Balance should be 1M tokens for contract creator"
    );
  });
});
