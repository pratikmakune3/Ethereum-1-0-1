const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'foam correct ketchup clap recipe embrace buzz enrich sorry inspire broom decorate',
	'https://rinkeby.infura.io/8XD618jxOTDI4y1ndJXM'
);

const web3 = new Web3(provider);	

// Deploy script steps -> 1) Get the list of accounts  2) Create new Contract instance  3) Call .deploy()  4) Call .send()

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy contract from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface)) 
		.deploy({ data: bytecode })
		.send({ from: accounts[0], gas: '1000000' });

	console.log('interface --- > ',interface)

	console.log('Contract is deployed to', result.options.address); // 0xf4c0Bbce81534EE553FC11AC00a6e58D43a2e153
};

deploy();