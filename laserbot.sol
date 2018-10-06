pragma solidity ^0.4.0;

contract LaserBot {
    uint storedData;
    address public winner;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
