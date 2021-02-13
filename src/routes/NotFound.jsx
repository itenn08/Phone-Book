import React from "react";
import { Link } from "react-router-dom";
import { Message, Container } from "semantic-ui-react";

const NotFound = () => (
  <Container text>
    <Link to="/">
      <Message
        icon="search"
        header="Sorry page is not found"
        content="Click to go main page"
      />
    </Link>
  </Container>
);

export default NotFound;
