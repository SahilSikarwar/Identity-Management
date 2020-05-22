import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "../components/Header";

export default (props) => {
  return (
    <div>
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          ></link>
        </Head>
        <Header />
        {props.children}
        {/* <Footer /> */}
      </Container>
    </div>
  );
};
