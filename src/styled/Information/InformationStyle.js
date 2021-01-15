import styled from "styled-components";
import { Alert, Card, Container } from "react-bootstrap";

import img from "./../../images/Information.jpg";

export const StContent = styled.div `
    background: url(${img}) no-repeat center center fixed;
    background-size: cover;
    text-align: center;
`;

export const StAlert = styled(Alert) `
    background-color: rgba(255,255,255,0.8);    
`;

export const StCard = styled(Card) `
    height: 350px;
    border-radius: 25px;
    margin-bottom: 9%;
        img{
            margin: auto
        }
`;

export const StContainer = styled(Container) `
    padding-bottom: 2%;
`;