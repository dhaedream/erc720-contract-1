const ChainGang = artifacts.require("ChainGang");

contract("ChainGang", (accounts) => {
  console.log(accounts);

  before(async () => {
    chaingang = await ChainGang.deployed();
  });
  it("gives the owner 1m tokens", async () => {
    let balance = await chaingang.balanceOf(accounts[0]);
    balance = web3.utils.fromWei(balance, "ether");
    // check that balance is equal to 1000000
    assert.equal(
      balance,
      "1000000",
      "Balance should be 1M tokens for contract creator"
    );
  });
  it("can transfer tokens between accounts", async () => {
    let amount = web3.utils.toWei("1000", "ether");
    await chaingang.transfer(accounts[1], amount, { from: accounts[0] });

    let balance = await chaingang.balanceOf(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    assert.equal(balance, "1000", "Balance should be 1k from contract creator");
  });
});
