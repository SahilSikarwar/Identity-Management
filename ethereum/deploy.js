const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledID = require("./build/IdentityManagement.json");

const provider = new HDWalletProvider(
  "universe skirt hat mimic hub replace bunker collect foam excite force album",
  "https://rinkeby.infura.io/v3/435bc476269647dfb0fafcced02594c5"
);

const web3 = new Web3(provider);

const deploy = async () => {
  accounts = await web3.eth.getAccounts();
  console.log("Attempting to login from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledID.interface))
    .deploy({ data: "0x" + compiledID.bytecode })
    .send({ from: accounts[0], gas: "3000000" });

  console.log("Contract deployed to", result.options.address);
};
deploy();
// Contract deployed at 0x8C3f1149800DEe831dA6e7EA6814858c43A66849
