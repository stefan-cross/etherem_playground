// SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.7;

contract MyContract {
    
    // public keyword auto creates getters and setters, but for this demo we will also create our own...
    uint256 public myVar;
    
    function setMyVar(uint256 _myVar) public {
        myVar = _myVar;
    }
    
    function getMyVar() view public returns(uint256) {
        return myVar;
    }
    
}
