import React from "react";
import {
  Menu,
  Segment,
  Container,
  Grid,
  Header,
  List,
  Divider,
  Image,
  Button,
} from "semantic-ui-react";
import Link from "next/link";

export default () => {
  return (
    <Segment
      inverted
      style={{
        margin: "",
        padding: "20px 0 0 0",
        position: "absolute",
        width: "100%",
        height: "38%",
        bottom: "-20px",
      }}
      vertical
    >
      <Grid
        columns={3}
        style={{ paddingLeft: "50px", paddingRight: "50px" }}
        stackable
        inverted
        divided
      >
        <Grid.Row>
          <Grid.Column floated="left" width={7}>
            <Header inverted as="h4" content="THIS PROJECT" />
            <p style={{ textAlign: "justify" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={2}>
            <Header inverted as="h4" content="ABOUT ME" />
            <List>
              <List.Item>
                <List.Icon name="users" />
                <List.Content>Sahil</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>INDIA, UP</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <a href="mailto:jack@semantic-ui.com">sahil.bk@hotmail.com</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content>
                  <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column floated="right" width={2}>
            <Header inverted as="h4" content="QUICK LINKS" />
            <List>
              <List.Item>Create Wallet</List.Item>
              <List.Item>Send Request</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider
        style={{ marginLeft: "3%", marginRight: "3%" }}
        inverted
        section
      />
      <Container>
        <List floated="right" horizontal>
          <List.Item>
            <Image src="/static/id.png" centered size="mini" />
          </List.Item>
          <List.Item>
            <Button circular inverted color="black" icon="facebook" />
          </List.Item>
          <List.Item>
            <Button circular inverted color="black" icon="twitter" />
          </List.Item>
          <List.Item>
            <Button circular inverted color="black" icon="linkedin" />
          </List.Item>
          <List.Item>
            <Button circular inverted color="black" icon="google plus" />
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};
