pragma solidity ^0.4.17;

contract Inbox {
    // storage variables 
    string public message;
    
    // constructor function
    function Inbox(string initMessage) public {
        message = initMessage;
    } 
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}