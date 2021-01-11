import React from 'react';
import styles from './Information.module.css'
import profileLogo from './../images/profile.png'
import { Card,CardColumns,Alert } from 'react-bootstrap';

const Information =()=>{

  let directEmployers=["Mark","Ban","Vasya","Ivan","Andrew"].map((person)=>{
   return <Card>
    <img src={profileLogo} alt={"profileLogo"} ></img>
    <Card.Body>
      <Card.Title>{person}</Card.Title>
      <Card.Text>
        Hello,my name is {person} and I work on props.userName
      </Card.Text>
    </Card.Body>
  </Card>

})
let noDirectEmployers=["Anton","Vitalya"].map((person)=>{
  return <Card>
   <img src={profileLogo} alt={"profileLogo"} ></img>
   <Card.Body>
     <Card.Title>{person}</Card.Title>
     <Card.Text>
       Hello,my name is {person} and I work on props.userName
     </Card.Text>
   </Card.Body>
 </Card>

})

  return (<div className={styles.mainPageInformation}>
 <Alert variant={'secondary '}>
 <h1> Information about 'props.username'</h1>
 <h3>Posistion:props.position</h3>

<h3>Direct subordinates:</h3>
</Alert>
    <CardColumns>
      {directEmployers?directEmployers:<h1>No users</h1>}
   </CardColumns>
    <Alert variant={'secondary '}>
        <h3>noDirect subordinates:</h3>
        </Alert>
    <CardColumns>
        {noDirectEmployers?noDirectEmployers:<h1>No users</h1>}
     </CardColumns>


  </div>)}

  export default Information;