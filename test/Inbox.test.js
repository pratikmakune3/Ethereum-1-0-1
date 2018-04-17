const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Web3 with capital 'W' as it's contructor function
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile')

let accounts;
beforeEach(async () => {
//STEP 1 : Get list of all ganache accounts	
	
	// Promise syntax
	// web3.eth.getAccounts()
	// 	.then((fetchedAccounts) => {
	// 		console.log(fetchedAccounts);
	// 	});

	// async await syntax
	accounts = await web3.eth.getAccounts();

//STEP 2 : Use one of those accounts to deploy contract
});

describe('Inbox', () => {
	it('deploys a contract', () => {
		console.log(accounts);
	});
});