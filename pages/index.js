import React, { Component } from "react";
import Layout from "../components/Layout";
import { Link } from "../routes";
import {
  Segment,
  Header,
  Image,
  List,
  Grid,
  Card,
  Icon,
} from "semantic-ui-react";

class index extends Component {
  render() {
    return (
      <Layout>
        <Grid centered columns={4}>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header textAlign="center">User</Card.Header>
              </Card.Content>
              <Card.Content>
                <List>
                  <Link route={`/user/new`}>
                    <List.Item style={{ cursor: "pointer" }}>
                      <Icon name="plus" size="large" />
                      <List.Content>
                        <List.Header>Add Wallet</List.Header>
                        <List.Description>
                          Create A New User Space
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </Link>

                  <Link route={`/user/addlicence`}>
                    <List.Item style={{ cursor: "pointer" }}>
                      <Icon name="address card" size="large" />
                      <List.Content>
                        <List.Header>Add Licence</List.Header>
                        <List.Description>
                          Store Your Documents
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </Link>

                  <Link route={`/user/request/view`}>
                    <List.Item style={{ cursor: "pointer" }}>
                      <Icon name="tasks" size="large" />
                      <List.Content>
                        <List.Header>View Requests</List.Header>
                        <List.Description>
                          View Your Document Requests
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </Link>
                </List>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header textAlign="center">Company</Card.Header>
              </Card.Content>
              <Card.Content>
                <List>
                  <Link route={`/company/newrequest`}>
                    <List.Item style={{ cursor: "pointer" }}>
                      <Icon name="handshake" size="large" />
                      <List.Content>
                        <List.Header>Request Document Access</List.Header>
                        <List.Description>
                          Create New Request To Fetch User Data
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </Link>

                  <Link route={`/company/viewrequest`}>
                    <List.Item style={{ cursor: "pointer" }}>
                      <Icon name="folder open" size="large" />
                      <List.Content>
                        <List.Header>View Access Requests</List.Header>
                        <List.Description>
                          View Your Access Request List
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </Link>
                </List>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default index;
