App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
     // Is there is an injected web3 instance?
     if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
      return App.initContract();
    } else {
      // // If no injected web3 instance is detected, fallback to the TestRPC.
      // App.web3Provider = new web3.providers.HttpProvider('http://localhost:8545');
      // web3 = new Web3(App.web3Provider);
      alert("no web3 - install metamask")
    }
  },

  initContract: function() {
    $.getJSON('LaserBot.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      App.contracts.LaserBot = TruffleContract(data);

      // Set the provider for our contract.
      App.contracts.LaserBot.setProvider(App.web3Provider);

      App.contracts.LaserBot.deployed().then(function(instance) {
        let addr = App.contracts.LaserBot.address
        $('.addr').text(addr.toString())
        web3.eth.getBalance(addr, (err, balance) => $('.prize').text(balance.toString()))
        instance.getBid().then(bid => $('.bid').text(bid.toString()))
        instance.getIncrement().then(bid => $('.increment').text(bid.toString()))
        instance.getWinner().then(winner => $('.winner').text(winner.toString()))
      })

      // Use our contract to retieve and mark the adopted pets.
      // return App.markAdopted();
    });

    return App.bindEvents();
  },

  handleGet: function () {
    event.preventDefault();
    App.contracts.LaserBot.deployed().then(function(instance) {
      instance.currentBid().then(bid => console.log('bid', bid))
      instance.winner().then(winner => console.log('winner', winner))
    })
  },

  bindEvents: function() {
    $(document).on('click', '.btn-get', App.handleGet);
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});