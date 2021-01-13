import styled from "styled-components";
import img from "./../../images/main.jpg"
import { Alert } from "react-bootstrap";

export const Styles = styled(Alert)`
text-align: center;
font-size: 24px;
opacity: 0.9;
border-radius: 25px;
div {
  opacity: 1;
}
.butFind {
  margin-left: 20px;
  width: 90px;
}
`;
export const Container = styled.div`
padding-top: 15%;
background-image: url(${img});
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`