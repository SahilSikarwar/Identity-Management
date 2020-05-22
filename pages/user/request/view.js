import React, { Component } from "react";
import web3 from "../../../ethereum/web3";
import instanceID from "../../../ethereum/compiledID";
import Layout from "../../../components/Layout";
import { Table } from "semantic-ui-react";
import RequestRowsUser from "../../../components/RequestRowsUser";

class ViewRequestUser extends Component {
  state = {
    rows: null,
    count: null,
  };

  componentDidMount() {
    this.renderRows();
  }

  FetchData = async () => {
    const accounts = await web3.eth.getAccounts();
    const count = await instanceID.methods
      .viewRequestLength(accounts[0])
      .call();
    this.setState({ count });

    const requests = await Promise.all(
      Array(parseInt(count))
        .fill()
        .map((element, index) => {
          return instanceID.methods
            .viewRequestHeader(accounts[0], index)
            .call();
        })
    );
    return requests;
  };

  renderRows = async () => {
    var requests = await this.FetchData();

    this.setState({
      rows: requests.map((request, index) => {
        return <RequestRowsUser key={index} id={index} request={request} />;
      }),
    });
  };

  render() {
    const { Header, Row, HeaderCell, Body, Cell } = Table;
    return (
      <Layout>
        <Table celled>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>RequestedBy</HeaderCell>
              <HeaderCell>Approval Status</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Reject</HeaderCell>
            </Row>
          </Header>
          <Body>{this.state.rows}</Body>
        </Table>
        <div>Found {this.state.count} Requests</div>
      </Layout>
    );
  }
}

export default ViewRequestUser;
