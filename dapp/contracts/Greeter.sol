//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string greeting;

    constructor(string memory _greeting) {
        console.log("Dpeloying a Greeter with greeting: ", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeter(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s' ", greeting, _greeting);
        greeting = _greeting;
    }
}