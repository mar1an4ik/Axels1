import styled from "styled-components";
import { Alert } from "react-bootstrap";

import img from "./../../images/main.jpg";


export const Styles = styled(Alert) `
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

export const Container = styled.div `
    background-image: url(${img});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const UlStyled = styled.ul `
    list-style-type:none;
    background-color: white;
    margin: 0;
    padding: 0;
    text-align:left;
    width:200px;
    margin-bottom:10px;
  `;