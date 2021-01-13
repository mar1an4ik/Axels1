import React from "react";
import { Alert, Button, InputGroup, FormControl } from "react-bootstrap";
import {Styles,Container} from "./../styled/MainPage/MainPageStyle"
import styled from "styled-components";
import img from "./../images/main.jpg"

const MainPage = (props) => {
  let refInput = React.createRef();


  let handleClick = () => {
    props.findClicked(refInput.current.value);
  };

  return (<Container>
      <Styles>
        <Alert variant={"dark  "}>
          <h2>Enter Employee name: </h2>
          <input type={"text"} ref={refInput} placeholder={"Name"}></input>
                 <Button variant="dark  "size="lg" className={"butFind"} onClick={handleClick}> Find </Button>
        </Alert>
      </Styles>
    </Container>
  );
};

export default MainPage;
