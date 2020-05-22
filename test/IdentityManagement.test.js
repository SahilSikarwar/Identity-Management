const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const identityManagement = require("../ethereum/build/IdentityManagement.json");

let accounts;
let idContract;

beforeEach(async () => {
  // Get all accounts form ganache provider
  accounts = await web3.eth.getAccounts();

  // Deploy contract and store the instance
  idContract = await new web3.eth.Contract(
    JSON.parse(identityManagement.interface)
  )
    .deploy({ data: identityManagement.bytecode })
    .send({ from: accounts[0], gas: "5000000" });
});

describe("Identity Management", () => {
  it("Deploy contract", () => {
    assert.ok(idContract.options.address);
  });

  it("Add a user", async () => {
    await idContract.methods.addUser("Sahil", "sahil.com", 864536218).send({
      from: accounts[0],
      gas: "1000000",
    });

    const user = await idContract.methods.viewUser().call();
    const userCount = await idContract.methods.userCount().call();
    assert.equal("Sahil", user[0]);
    assert.equal(1, userCount);
  });

  it("add licence in the wallet", async () => {
    //add user
    await idContract.methods.addUser("Sahil", "sahil.com", 864536218).send({
      from: accounts[0],
      gas: "1000000",
    });

    //add licence
    await idContract.methods
      .addUserLicence(187212, "sahil", "25/04/1998", "up, agra")
      .send({
        from: accounts[0],
        gas: "1000000",
      });

    const licence = await idContract.methods
      .viewUserLicence(accounts[0])
      .call();
    assert.equal("sahil", licence[1]);
  });

  it("Updates user in the database", async () => {
    //add user
    await idContract.methods.addUser("Sahil", "sahil.com", 864536218).send({
      from: accounts[0],
      gas: "1000000",
    });

    //update user
    await idContract.methods
      .updateUser("sikarwar", "sahil.com", 864536218)
      .send({
        from: accounts[0],
        gas: "1000000",
      });

    //view user
    const user = await idContract.methods.viewUser().call();
    assert.equal("sikarwar", user[0]);
  });

  it("Updates user licence", async () => {
    //add user
    await idContract.methods.addUser("Sahil", "sahil.com", 864536218).send({
      from: accounts[0],
      gas: "1000000",
    });

    //add licence
    await idContract.methods
      .addUserLicence(187212, "sahil", "25/04/1998", "up, agra")
      .send({
        from: accounts[0],
        gas: "1000000",
      });

    //update licence
    await idContract.methods
      .updateUserLicence(187212, "sikarwar", "25/04/1998", "up, agra")
      .send({
        from: accounts[0],
        gas: "1000000",
      });

    const licence = await idContract.methods
      .viewUserLicence(accounts[0])
      .call();
    assert.equal("sikarwar", licence[1]);
  });

  it("Add licence request, and check request array length", async () => {
    //add user
    await idContract.methods.addUser("Sahil", "sahil.com", 864536218).send({
      from: accounts[0],
      gas: "1000000",
    });

    //add licence request
    await idContract.methods.addLicenceRequest(accounts[0], "abc").send({
      from: accounts[1],
      gas: "1000000",
    });

    // view licence and check request array length
    const request = await idContract.methods
      .viewLicenceRequest(accounts[0], 0)
      .call();
    const requestCount = await idContract.methods
      .viewRequestLength(accounts[0])
      .call();

    assert.equal("abc", request[1]);
    assert.equal(1, request[2]);
    assert.equal(1, requestCount);
  });

  it("User finalize request", async () => {
    await idContract.methods.addUser("Sahil", "sahil.com", 864536218).send({
      from: accounts[0],
      gas: "1000000",
    });

    //add licence request
    await idContract.methods.addLicenceRequest(accounts[0], "abc").send({
      from: accounts[1],
      gas: "1000000",
    });

    // finalize licence request
    await idContract.methods.finalizeRequest(0, 2).send({
      from: accounts[0],
      gas: "1000000",
    });
    const request = await idContract.methods
      .viewLicenceRequest(accounts[0], 0)
      .call();
    assert.equal(2, request[2]);
  });
});
