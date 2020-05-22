import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //we are on browser
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/435bc476269647dfb0fafcced02594c5"
  );
  web3 = new Web3(provider);
}

export default web3;
