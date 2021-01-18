import React from "react";
import { Row } from "react-bootstrap";

import { StContent, StAlert, StContainer } from "./../styled/Information/InformationStyle";

const Information = ({userName,vacancy,directEmployers,noDirectEmployers}) =>(
   <StContent>
     <StAlert variant={"secondary "}>
      <h2>Information about {userName}</h2>
      <h3>Position: {vacancy}</h3>
     </StAlert>

     <StAlert variant={"secondary "}>
       <h4>Direct subordinates:</h4>
     </StAlert>

     { directEmployers.length >= 1 ? (
       <StContainer>
         <Row>
           {directEmployers}
         </Row>
       </StContainer>
     ) : (
      <h1>No users</h1>
     )}
     
     <StAlert variant={"secondary "}>
      <h4>Indirect subordinates:</h4>
     </StAlert>

     { noDirectEmployers.length >= 1 ? (
       <StContainer>
         <Row>{noDirectEmployers}</Row>
       </StContainer>
      ) : (
          <h1>No users</h1>
      )}
     
      </StContent>
);


export default Information;
