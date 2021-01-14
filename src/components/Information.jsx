import React from "react";
import { Container, Row } from "react-bootstrap";

import { Content, StAlert } from "./../styled/Information/InformationStyle";
const Information = ({userName,vacancy,directEmployers,noDirectEmployers}) =>(
   <Content>
     <StAlert variant={"secondary "}>
      <h2>Information about {userName}</h2>
      <h3>Position: {vacancy}</h3>
      <h4>Direct subordinates:</h4>
     </StAlert>

     {directEmployers.length >= 1 ? (
       <Container>
        <Row>{directEmployers}</Row>
      </Container>
     ) : (
      <h1>No users</h1>
     )}
     
     <StAlert variant={"secondary "}>
      <h4>noDirect subordinates:</h4>
     </StAlert>

     {noDirectEmployers.length >= 1 ? (
       <Container>
         <Row>{noDirectEmployers}</Row>
       </Container>
      ) : (
          <h1>No users</h1>
      )}
     
      </Content>
);


export default Information;
