import React from 'react';
import { Alert,Button } from 'react-bootstrap';
import  main from './MainPage.module.css'
import styled from 'styled-components'
const MainPage=()=>{
 
  const Styles=styled(Alert)`
  text-align:center;
  font-size: 24px;
  opacity:0.9;
  border-radius:25px;
  .butFind {
    margin-left:20px;
    width:90px;
  }
  `
    return (
      <div className={main.MainPage}>
     
        <Styles>
        <Alert  variant={"dark  "}  >
      
        <h2>Enter Employee name: </h2>
        <input type={"text"}  placeholder={"Name"} ></input>
        <Button variant="dark  " size="lg" className={"butFind"}> Find</Button>
      
       </Alert>
       </Styles>
      </div>
    );
    
  
  
}

export default MainPage;