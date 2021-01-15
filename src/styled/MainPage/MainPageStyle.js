import styled from "styled-components";
import { Alert } from "react-bootstrap";

import img from "./../../images/main.jpg";


export const Styles = styled(Alert) `
    text-align: center;    
    font-size: 24px;
    opacity: 0.9;
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
    border: 1px black solid;
    border-radius:25px;
    text-align:center;
    margin: 0 0 10% 0;

    column-count:3;
`;
























