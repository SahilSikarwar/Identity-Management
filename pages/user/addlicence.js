import React, { Component } from "react";
import web3 from "../../ethereum/web3";
import Layout from "../../components/Layout";
import instance from "../../ethereum/compiledID";

import {
  Header,
  Grid,
  Form,
  Message,
  Button,
  Segment,
} from "semantic-ui-react";

class AddLicence extends Component {
  state = {
    lName: "",
    lNumber: null,
    lDOB: "",
    lAddress: "",
    errMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    this.setState({ loading: true, errMessage: "" });
    try {
      await instance.methods
        .addUserLicence(
          this.state.lNumber,
          this.state.lName,
          this.state.lDOB,
          this.state.lAddress
        )
        .send({
          from: accounts[0],
        });
    } catch (err) {
      this.setState({ errMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Header as="h3" content="Add Your Licence!" />

        <Grid>
          <Grid.Column width={8}>
            <Message
              attached
              //   style={{ width: "60%" }}
              header="Welcome To Add Licence Page!"
              content="Fill out the form below to add your document in your wallet. 
              Remember to use the same account in metamask which you have a wallet with"
            />
            <Form
              error={!!this.state.errMessage}
              onSubmit={this.onSubmit}
              className="attached segment"
            >
              <Form.Field>
                <Form.Input
                  label="Licence Number"
                  type="text"
                  value={this.state.name}
                  onChange={(event) => {
                    this.setState({ lNumber: event.target.value });
                  }}
                  placeholder="Enter Licence Number"
                />
                <Form.Input
                  label="Name as per Licence"
                  type="text"
                  value={this.state.email}
                  onChange={(event) => {
                    this.setState({ lName: event.target.value });
                  }}
                  placeholder="Enter name as per licence"
                />
                <Form.Input
                  type="date"
                  label="Date Of Birth"
                  value={this.state.number}
                  onChange={(event) => {
                    this.setState({ lDOB: event.target.value });
                  }}
                  placeholder="Enter DOB"
                />
                <Form.Input
                  label="Address"
                  value={this.state.number}
                  onChange={(event) => {
                    this.setState({ lAddress: event.target.value });
                  }}
                  placeholder="Enter your address"
                />
              </Form.Field>
              <Message
                error
                header="There was some errors with your submission"
                content={this.state.errMessage}
              />

              <Button
                loading={this.state.loading}
                disabled={this.state.loading}
                primary
              >
                Add Licence
              </Button>
            </Form>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment
              style={{
                backgroundColor: "#6886c5",
                height: "100%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  position: "relative",
                  top: "20%",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "50px",
                    fontWeight: "bold",
                    // paddingTop: "20%",
                  }}
                >
                  Add your Documents
                  <br />
                  Keep them BLOCKCHAIN safe
                </p>
                {/* <p
              style={{
                // position: "relative",
                color: "white",
                fontSize: "30px",
                fontWeight: "bold",
                // bottom: "15%",
              }}
            ></p> */}
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default AddLicence;
