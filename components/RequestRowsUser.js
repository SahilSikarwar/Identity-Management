import React, { Component } from "react";
import { Table, Button, Label } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import instance from "../ethereum/compiledID";
import { Router } from "../routes";

// show request pages that will show rows of all the requests available in the contract
class RequestRowsUser extends Component {
  state = {
    loading: false,
    errMessage: "",
    rowBool: false,
  };

  approve = async () => {
    this.setState({ loading: true, errMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await instance.methods.finalizeRequest(this.props.id, 2).send({
        from: accounts[0],
      });
    } catch (err) {
      this.setState({ errMessage: err.message });
    }
    this.setState({ loading: false });
    Router.pushRoute(`/user/request/view`);
  };

  reject = async () => {
    this.setState({ loading: true, errMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await instance.methods.finalizeRequest(this.props.id, 3).send({
        from: accounts[0],
      });
    } catch (err) {
      this.setState({ errMessage: err.message });
    }
    this.setState({ loading: false });
    Router.replaceRoute(`/user/request/view`);
  };

  render() {
    // js syntax to destructure variables and objects.
    const { Row, Cell } = Table;
    const { id, request } = this.props;
    var approve;
    if (request[2] == 1) {
      approve = "Requested";
    } else if (request[2] == 2) {
      approve = "Approved";
      //   this.setState({ rowBool: true });
    } else {
      approve = "Rejected";
      //   this.setState({ rowBool: true });
    }

    return (
      <Row>
        <Cell>
          <Label color="black" ribbon>
            {id + 1}
          </Label>
        </Cell>
        <Cell>{request[1]}</Cell>
        <Cell>{approve}</Cell>
        <Cell>
          <Button
            loading={this.state.loading}
            disabled={this.state.loading}
            onClick={this.approve}
            basic
            color="blue"
            content="blue"
          >
            Approve
          </Button>
        </Cell>
        <Cell>
          <Button
            loading={this.state.loading}
            disabled={this.state.loading}
            onClick={this.reject}
            basic
            color="red"
          >
            Rejected
          </Button>
        </Cell>
      </Row>
    );
  }
}

export default RequestRowsUser;
