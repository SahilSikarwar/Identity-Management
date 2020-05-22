import React, { Component } from "react";
import Layout from "../../components/Layout";
import instanceID from "../../ethereum/compiledID";
import web3 from "../../ethereum/web3";
import _ from "lodash";
import {
  Form,
  Input,
  Header,
  Button,
  Message,
  Grid,
  Segment,
} from "semantic-ui-react";

class AddUser extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    errorName: "",
    errorEmail: "",
    errorNumber: "",
    loading: false,
    errMessage: "",
  };

  isAlpha(input) {
    var pattern = /^[^\s][a-zA-Z ]*$/;
    return pattern.test(input);
  }

  isEmail(input) {
    var pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return pattern.test(input);
  }

  isMobileNumber(input) {
    var pattern = /^([0-9]{10})$/;
    return pattern.test(input);
  }

  validation = () => {
    this.setState({ errorName: "", errorEmail: "", errorNumber: "" });
    //Required
    // For name field!
    if (!this.state.name) {
      this.setState({ errorName: "Required Fields!" });
    } else {
      var bool = this.isAlpha(this.state.name);
      if (!bool) {
        this.setState({ errorName: "Enter a valid name!" });
      }
    }

    // For Email Field
    if (!this.state.email) {
      this.setState({ errorEmail: "Required Fields!" });
    } else {
      var bool = this.isEmail(this.state.email);
      if (!bool) {
        this.setState({ errorEmail: "Enter a valid email id!" });
      }
    }

    // For Number field
    if (!this.state.number) {
      this.setState({ errorNumber: "Required Fields!" });
    } else {
      var bool = this.isMobileNumber(this.state.number);
      if (!bool) {
        this.setState({ errorNumber: "Enter a valid number!" });
      }
    }

    // if (
    //   this.state.errorName &&
    //   this.state.errorEmail &&
    //   this.state.errorNumber
    // ) {
    //   return false;
    // } else {
    //   return true;
    // }
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.validation();
    const accounts = await web3.eth.getAccounts();
    if (
      this.state.errorName == "" &&
      this.state.errorEmail == "" &&
      this.state.errorNumber == ""
    ) {
      this.setState({ loading: true, errMessage: "" });
      try {
        const { name, email, number } = this.state;
        await instanceID.methods.addUser(name, email, number).send({
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
        <Header as="h3" content="Create new wallet" />

        <Grid>
          <Grid.Column width={8}>
            <Message
              attached
              //   style={{ width: "60%" }}
              header="Welcome To Create Wallet Page!"
              content="Fill out the form below to Register"
            />
            <Form
              error={!!this.state.errMessage}
              onSubmit={this.onSubmit}
              className="attached segment"
            >
              <Form.Field>
                <Form.Input
                  error={
                    !this.state.errorName
                      ? null
                      : {
                          content: this.state.errorName,
                          pointing: "above",
                        }
                  }
                  label="Full name"
                  onKeyUp={this.validation}
                  type="text"
                  value={this.state.name}
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                  placeholder="Enter full name"
                />
                <Form.Input
                  error={
                    !this.state.errorEmail
                      ? null
                      : {
                          content: this.state.errorEmail,
                          pointing: "above",
                        }
                  }
                  label="Email"
                  type="text"
                  onKeyUp={this.validation}
                  value={this.state.email}
                  onChange={(event) => {
                    this.setState({ email: event.target.value });
                  }}
                  placeholder="Enter email ID"
                />
                <Form.Input
                  error={
                    !this.state.errorNumber
                      ? null
                      : {
                          content: this.state.errorNumber,
                          pointing: "above",
                        }
                  }
                  label="Mobile number"
                  value={this.state.number}
                  onKeyUp={this.validation}
                  onChange={(event) => {
                    this.setState({ number: event.target.value });
                  }}
                  placeholder="Enter Mobile Number"
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
                Create Wallet
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
                  Create You Wallet
                  <br />
                  Keep Your Documents Safe!
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

export default AddUser;
