const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')

function initContract (contract) {
    console.log(contract)
}

module.exports = function startApp(web3) {
  const eth = new Eth(web3.currentProvider)
  const contract = new EthContract(eth)
  initContract(contract)
}