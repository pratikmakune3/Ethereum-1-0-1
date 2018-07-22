pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players; 
     
    function Lottery() public {
        manager = msg.sender;
    }
    
    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }
    
    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }
    
    // Note the function modifier restricted
    function pickWinner() public restricted {
        uint index = random() % players.length;
        // players[index] returns address which is having some methods attached to it 
        // this --> current contract instance and balance = current balance of ether in the contract
        players[index].transfer(this.balance);
        // Reset the contract state by emptying the players[]
        players = new address[](0);
    }
    
    // Do not repeat yourself. Function modifier
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function getPlayers() public view returns (address[]) {
        return players;
    }
}