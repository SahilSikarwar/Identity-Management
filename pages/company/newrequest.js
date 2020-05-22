import React, { Component } from "react";
import web3 from "../../ethereum/web3";
import instanceID from "../../ethereum/compiledID";
import Layout from "../../components/Layout";
import {
  Form,
  Header,
  Grid,
  Button,
  Segment,
  Message,
} from "semantic-ui-react";

class NewRequest extends Component {
  state = {
    errMessage: "",
    loading: false,
    UserAddress: "",
    requestedBy: "",
    errorAddress: "",
    errorRequestedby: "",
  };

  isAlpha(input) {
    var pattern = /^[^\s][a-zA-Z ]*$/;
    return pattern.test(input);
  }

  isValidAddress(rawInput) {
    try {
      const address = web3.utils.toChecksumAddress(rawInput);
    } catch (e) {
      return false;
    }
    return true;
  }

  validation = () => {
    this.setState({ errorAddress: "", errorRequestedby: "" });
    //Required
    // For Addtress field!
    if (!this.state.UserAddress) {
      this.setState({ errorAddress: "Required Fields!" });
    } else {
      let bool = this.isValidAddress(this.state.UserAddress);

      if (!bool) {
        this.setState({ errorAddress: "Enter a valid User Address!" });
      }
    }
    // For RequestedBy Field
    if (!this.state.requestedBy) {
      this.setState({ errorRequestedby: "Required Fields!" });
    } else {
      var bool = this.isAlpha(this.state.requestedBy);
      if (!bool) {
        this.setState({ errorRequestedby: "Enter a valid Name!" });
      }
    }
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.validation();
    const accounts = await web3.eth.getAccounts();
    if (this.state.errorAddress == "" && this.state.errorRequestedby == "") {
      this.setState({ loading: true, errMessage: "" });
      try {
        const { UserAddress, requestedBy } = this.state;
        await instanceID.methods
          .addLicenceRequest(UserAddress, requestedBy)
          .send({
            from: accounts[0],
          });
      } catch (err) {
        this.setState({ errMessage: err.message });
      }
      this.setState({ loading: false });
    } else {
      this.setState({ errMessage: "Error in the Form!" });
    }
  };

  render() {
    return (
      <Layout>
        <Header as="h3" content="Create Document Request!" />

        <Grid>
          <Grid.Column width={8}>
            <Message
              attached
              //   style={{ width: "60%" }}
              header="Welcome To Document Request Page"
              content="Fill out the form below to create a request asking for documents"
            />
            <Form
              error={!!this.state.errMessage}
              onSubmit={this.onSubmit}
              className="attached segment"
            >
              <Form.Field>
                <Form.Input
                  error={
                    !this.state.errorAddress
                      ? null
                      : {
                          content: this.state.errorAddress,
                          pointing: "above",
                        }
                  }
                  label="User's Address"
                  onKeyUp={this.validation}
                  type="text"
                  value={this.state.UserAddress}
                  onChange={(event) => {
                    this.setState({ UserAddress: event.target.value });
                  }}
                  placeholder="Enter User's Address"
                />
                <Form.Input
                  error={
                    !this.state.errorRequestedby
                      ? null
                      : {
                          content: this.state.errorRequestedby,
                          pointing: "above",
                        }
                  }
                  label="Name Of Your Organisation"
                  type="text"
                  onKeyUp={this.validation}
                  value={this.state.requestedBy}
                  onChange={(event) => {
                    this.setState({ requestedBy: event.target.value });
                  }}
                  placeholder="Enter Your Orgnisation's Name"
                />
              </Form.Field>
              <Message
                info
                header="Please Double Check The Form"
                content="Every operation that make a change in the document cost money!"
              />
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
                Create Request
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
                  Easy and Secure Way
                  <br />
                  For Sharing Documents!
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

export default NewRequest;
