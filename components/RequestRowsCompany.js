import React, { Component } from "react";
import { Table, Button, Label } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import { Link } from "../routes";
// show request pages that will show rows of all the requests available in the contract
class RequestRowsCompany extends Component {
  render() {
    // js syntax to destructure variables and objects.
    const { Row, Cell } = Table;
    const { id, request } = this.props;
    var approve;
    if (request[2] == 1) {
      approve = "Requested";
    } else if (request[2] == 2) {
      approve = "Approved";
    } else {
      approve = "Rejected";
    }
    var bool;
    if (approve != "Approved") {
      bool = true;
    } else {
      bool = false;
    }
    return (
      <Row>
        <Cell>
          <Label color="black" ribbon>
            {id + 1}
          </Label>
        </Cell>
        <Cell>{request[0]}</Cell>
        <Cell>{request[1]}</Cell>
        <Cell>{approve}</Cell>
        <Cell>
          <Link route={`/company/${request[0]}`}>
            <Button disabled={bool} basic color="blue" content="blue">
              View Document
            </Button>
          </Link>
        </Cell>
      </Row>
    );
  }
}

export default RequestRowsCompany;
