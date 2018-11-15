pragma solidity ^0.4.0;

contract LaserBot {

    // increment each bid with this much wei minimum
    uint public bidIncrement; // MUST BE POSITIVE

    // current bid in Wei
    uint public currentBid = 0;

    address public winner;
    
    constructor(uint minimumBidIncrement) public {
        // TODO this value must be positive (gt zero)
        bidIncrement = minimumBidIncrement;
        currentBid = minimumBidIncrement;
    }

    function placeBid () public payable {
        if (msg.value > currentBid) {
            winner = msg.sender;
            currentBid = msg.value + bidIncrement;
        }
    }

    function getIncrement() public view returns (uint) {
        return bidIncrement;
    }

    function getBid() public view returns (uint) {
        return currentBid;
    }

    function getWinner() public view returns (address) {
        return winner;
    }
}