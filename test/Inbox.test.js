const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Web3 with capital 'W' as it's contructor function

/*
	ganache.provider() is ganache specific provider. You can change this arg if network changes!
*/ 

const provider = ganache.provider()
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile')

let accounts, inbox;

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
	inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments:['Hi there!']})
		.send({ from: accounts[0], gas: '1000000' });

	inbox.setProvider(provider);
});

describe('Inbox', () => {
	it('deploys a contract', () => {
		// console.log(inbox);

		/*
			If the contract successfully deployed to n/w, inbox.options.address != null
			Hence existance of inbox.options.address means 'inbox' contract successfully deployed!
		*/ 
		assert.ok(inbox.options.address);

	});
});