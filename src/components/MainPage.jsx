import React from 'react';
import { Alert,Button } from 'react-bootstrap';
import  main from './MainPage.module.css'
const MainPage=()=>{
 
    return (
      <div className={main.MainPage}>
      <Alert  variant={"dark  "} style={{'text-align':'center',
                                         'fontSize':'20px','padding':'80px','opacity':'0.9',
                                         'border-radius':'25px'}} >
      
        <h3>Enter Employee name: </h3>
        <input type={"text"} style={{'margin-left':'10px'}}  placeholder={"Name"} ></input>
        <Button variant="dark  " size="lg" style={{'margin-left':'20px','width':'90px'}}> Find</Button>
      
       </Alert>
      </div>
    );
    
  
  
}

export default MainPage;