var DemoCoinCrowdsale = artifacts.require("./DemoCoinCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock('latest').timestamp // Start immediately
  const endTime = startTime + 7 * 24 * 60 * 60 // 7 days
  const rate = new web3.BigNumber(1000)
  const wallet = web3.eth.accounts[0]

  deployer.deploy(DemoCoinCrowdsale, startTime, endTime, rate, wallet)
};
