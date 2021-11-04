pragma solidity ^0.5.0;

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
