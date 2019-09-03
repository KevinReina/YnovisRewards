
// hier verwijzingen naar je smart contract
var contractAddress = '0x62B2023EFeF673d137Ad373D982FF5D198A0B1d0';
var rewarder = '0xD6C1d20dC3991366aCF8fdEE3565afd6F16Af84A';
var money = 100;
var isOzuna = false;
var contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "saleAmount",
				"type": "uint256"
			}
		],
		"name": "RewardUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Selfdestroy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "DECIMALS",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "INITIAL_AMOUNT",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "TOKEN_NAME",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "TOKEN_SYMBOL",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
window.App = {

    
	ABI: contractABI,
    GetBalance: async function() { 
		let balance = await App.contractInstance.methods.balanceOf(App.currentAccount.toString()).call()
		$("#currentBalance").html(balance);
	},
	RewardUser: async function(amount) {
		let result = await  App.contractInstance.methods.RewardUser(amount.trim()).send({from: App.currentAccount.toString() });
		alert(`Purchase complete, you were rewarded with DigiBees!`)
		if(isOzuna) {
			window.open("https://www.youtube.com/watch?v=wfWkmURBNv8");
			isOzuna = false;
		}
		money -= amount;
		$("#currentMoney").html(money);
		App.GetBalance();
	},
    currentAccount: undefined,
    connectToWeb3: async function()  {if (window.ethereum) {
        App.web3Provider = window.ethereum;
        try {
          await window.ethereum.enable();
          console.log("User gave account access");
        } catch (error) {
          console.error("User denied account access");
        }
      } else if (window.web3) {
        App.web3Provider = window.web3.currentProvider;
      } else {
        App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      }
      web3 = new Web3(App.web3Provider);
      console.log(web3)},
    contractAddress: contractAddress,
    getContractInstance: function()  {
        let abi = App.ABI
		let address = App.contractAddress
		console.log(abi)
		console.log(address)
        return new web3.eth.Contract(abi, address)
    },
    getCurrentAccount: async function() { {try {
        return web3.eth.getAccounts(async function(err, accounts) {
          if(err != null) {
            throw("There was an error fetching your accounts.")
          } else if (accounts.length == 0) {
            throw("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.")
          } else {
            return accounts[0]
          }
        })
      } catch(err) {
        alert(err)
      }}},
    setCurrentAccount: function()  {
        $("#currentAccount").html(App.currentAccount)
    },
    
    start: async function() {
      await App.connectToWeb3()
	  App.contractInstance = App.getContractInstance();
      App.currentAccount = await App.getCurrentAccount();
	  App.setCurrentAccount()
	  App.GetBalance()
    }
  }
  $(function() {
    App.start()
  })

$("#buy1").click(function() {
	var price = $("#phonePrice").html()
	// here goes some very complicated price validation
	if((money - price) >= 0)
		App.RewardUser(price);
	else 
		alert("you broke");
})

$("#buy2").click(function() {
	var price = $("#ozunaPrice").html();
	// here goes some very complicated price validation
	if((money - price) >= 0) {
		App.RewardUser(price);
		isOzuna = true;
	}
	else 
		alert("you broke");

})

$("#buy3").click(function() {
	var price = $("#honeyPrice").html()
	// here goes some very complicated price validation
	if((money - price) >= 0)
		App.RewardUser(price);
	else 
		alert("you broke");

})