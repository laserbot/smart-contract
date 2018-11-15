var LaserBot = artifacts.require("./LaserBot.sol");

module.exports = function(deployer) {
  deployer.deploy(LaserBot, 1);
};