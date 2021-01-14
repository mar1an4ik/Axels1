import React from "react";
import { Alert, Button } from "react-bootstrap";

import { Styles, Container, UlStyled } from "./../styled/MainPage/MainPageStyle";

const MainPage = ({users,error,findClicked}) => {
  const refInput = React.createRef();

  const handleClick = () => {
      findClicked(refInput.current.value);
  };

  return (
    <Container>
      <Styles>

        <UlStyled>{users}</UlStyled>
        <Alert variant={"dark"}>
          <div>
            <h2>Enter Employee name: </h2>
            {error ? (
              <label>This user is not working in our company</label>
            ) : null}
          </div>
          <input type={"text"} ref={refInput} placeholder={"Name"}/>
          <Button
            variant="dark"
            size="lg"
            className={"butFind"}
            onClick={handleClick}>Filter
          </Button>
        </Alert>

      </Styles>
    </Container>
  );
};

export default MainPage;
