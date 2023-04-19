import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col sm={6}>2021 © Registered by Huper Company.</Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
