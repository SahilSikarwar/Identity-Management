import React, { Component } from "react";
import { Header, Table } from "semantic-ui-react";
import Layout from "../../components/Layout";
import web3 from "../../ethereum/web3";
import instance from "../../ethereum/compiledID";

class ViewDocument extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const accounts = await web3.eth.getAccounts();
    const doc = await instance.methods.viewUserLicence(accounts[0]).call();
    // this.setState({ doc });
    console.log(doc);

    return { address, doc };
  }
  //   componentDidMount() {
  // this.fetchdata();
  // console.log(this.state.doc);
  //   }
  //   fetchdata = async () => {};
  render() {
    const { Header, Row, HeaderCell, Body, Cell } = Table;

    const { doc } = this.props;
    console.log(doc);

    return (
      <Layout>
        <Header as="h3" content="Document Info" />
        <div style={{ position: "relative", left: "25%" }}>
          <Table style={{ width: "50%" }} celled>
            <Body>
              <Row>
                <Cell>Licence Number</Cell>
                <Cell>{doc[0]}</Cell>
              </Row>
              <Row>
                <Cell>Name</Cell>
                <Cell>{doc[1]}</Cell>
              </Row>
              <Row>
                <Cell>DOB</Cell>
                <Cell>{doc[2]}</Cell>
              </Row>
              <Row>
                <Cell>Address</Cell>
                <Cell>{doc[3]}</Cell>
              </Row>
            </Body>
          </Table>
        </div>
      </Layout>
    );
  }
}

export default ViewDocument;
