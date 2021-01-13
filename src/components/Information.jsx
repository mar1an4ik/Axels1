import React from "react";
import { CardColumns, Alert,Container,Row,Col } from "react-bootstrap";
import {Content} from "./../styled/Information/InformationStyle"
const Information = (props) => {
  return (
    <Content>
      <Alert variant={"secondary "}>
        <h1> Information about {props.userName}</h1>
        <h3>Posistion: {props.vacancy}</h3>
        <h3>Direct subordinates:</h3>
      </Alert>
      <CardColumns>
        {props.directEmployers.length >= 1 ? (
          <Container>
            <Row>{props.directEmployers}</Row>
          </Container>
        ) : (
          <h1>No users</h1>
        )}
      </CardColumns>

      <Alert variant={"secondary "}>
        <h3>noDirect subordinates:</h3>
      </Alert>
      <CardColumns>
        {props.noDirectEmployers.length >= 1 ? (
          <Container>
            <Row>{props.noDirectEmployers}</Row>
          </Container>
        ) : (
          <h1>No users</h1>
        )}
      </CardColumns>
    </Content>
  );
};

export default Information;
