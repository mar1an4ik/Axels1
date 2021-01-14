import styled from "styled-components";
import { Alert } from "react-bootstrap";

import img from "./../../images/Information.jpg";

export const Content = styled.div `
    background: url(${img}) no-repeat center center fixed;
    background-size: cover;
    text-align:center;
`;

export const StAlert = styled(Alert)`
    background-color:rgba(255,255,255,0.8);    
`;