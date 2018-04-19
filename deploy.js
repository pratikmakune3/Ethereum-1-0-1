const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'link motor weapon street squeeze west zoo bachelor canal claim afford alley',
	'https://rinkeby.infura.io/8XD618jxOTDI4y1ndJXM'
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy contract from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface)) 
		.deploy({ data: bytecode, arguments: ['Hi there!'] })
		.send({ from: accounts[0], gas: '1000000' });

	console.log('Contract is deployed to', result.options.address); // 0xf4c0Bbce81534EE553FC11AC00a6e58D43a2e153
};
deploy();