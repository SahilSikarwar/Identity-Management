import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu style={{ marginTop: "1%" }}>
      <Container>
        <Link route="/">
          <Menu.Item>
            <img src="/static/Identity.png" />
          </Menu.Item>
        </Link>
        <Link route="/">
          <Menu.Item>Home</Menu.Item>
        </Link>

        <Menu.Menu position="right">
          <Link route="/user/new">
            <Menu.Item>Add wallet</Menu.Item>
          </Link>
          <Link route="/company/newrequest">
            <Menu.Item>Add Request</Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};
