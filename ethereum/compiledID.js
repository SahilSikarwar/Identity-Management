import web3 from "./web3";
import compiledID from "./build/IdentityManagement.json";

const instance = new web3.eth.Contract(
  JSON.parse(compiledID.interface),
  "0xa1aBF91cB12bE26E539d44F0d90baEd1E46b29F5"
);

export default instance;
