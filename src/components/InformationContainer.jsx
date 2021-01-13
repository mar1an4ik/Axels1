import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Information from "./Information";
import profileLogo from './../images/profile.png'
import {Card,Col,Row} from 'react-bootstrap';
import {useEffect, useState} from "react"
import {useDispatch} from 'react-redux'
import {setEmpSaga} from './../redux/EmpReducer'

const InformationContainer = (props) => {
    let userName = props.match.params.empName;
    const [direct, setDirect] = useState([])
    const [noDirect, setNoDirect] = useState([])
    const dispatch = useDispatch();

    let initJSX=(employersArray)=>{
      let newArray=employersArray.map((person) => {
        return <Col>
        <Card>
            <img src={profileLogo} alt={"profileLogo"}/>
            <Card.Body>
                <Card.Title>{person}</Card.Title>
                <Card.Text>
                    Hello,my name is {person} and I work on {userName}
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    })

      return newArray;
    }

    let initiaLizeEmployers=()=>{
      if (props.employersArray.length >= 1) {
        let directEmployers = initJSX(props.employersArray);
        let noDirectEmployers =initJSX(["Anton", "Vitalya", "Vitalya", "Vitalya", "Vitalya", "Vitalya", "Vitalya", "Vitalya", "Vitalya"]); 
        setDirect(directEmployers);
        setNoDirect(noDirectEmployers)
      } else {
        dispatch(setEmpSaga(props.match.params.empName));
        }
    }

    useEffect(() => {
       initiaLizeEmployers();
    }, [props.employersArray]);

    return (<div>
        <Information directEmployers={direct}
                     noDirectEmployers={noDirect}
                     userName={props.match.params.empName}
                     employersArray={props.employersArray}
                     vacancy={props.vacancy}/>
    </div>)
}

  let stateGo = (state) => {
    return {
        employersArray: state.empTree.employersArray,// out array with emp
        vacancy: state.empTree.vacancy
    }
  };

export default withRouter(connect(stateGo, {})(InformationContainer));