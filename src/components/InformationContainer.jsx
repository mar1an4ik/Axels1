import { Card, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Information } from "./../components";

import { setEmpSaga } from "../redux/reducers/EmpReducer";
import { StCard } from "../styled/Information/InformationStyle"
import profileLogo from "./../images/profile.png"



const InformationContainer = ({match,employersArray,vacancy}) => {
    const userName = match.params.empName;
    const [direct, setDirect] = useState([]);
    const [noDirect, setNoDirect] = useState([]);
    const dispatch = useDispatch();
    const initJSX = (employersArray) => (
      employersArray.map((person) => {
        return (
          <Col>
            <StCard>
              <img src={profileLogo} width={"200px"} height={"200px"} alt={"profileLogo"} />
              <Card.Body>
                <Card.Title>{person}</Card.Title>
                <Card.Text>
                  Hello, my name is {person} and I work for {userName}
                </Card.Text>
              </Card.Body>
            </StCard>
          </Col>
        );
      })
    );

  const initiaLizeEmployers = () => {
    if (employersArray.length >= 1) {
      if (employersArray[0] !== "") {
        const directEmployers = initJSX(employersArray);
        setDirect(directEmployers);
      } else setDirect("");
      const noDirectEmployers = initJSX([
        "Anton",
        "Vitalya",
        "Andrew",
        "Oleg"
      ]);
      setNoDirect(noDirectEmployers);
    } else {
      dispatch(setEmpSaga(match.params.empName));
    }
  };

  useEffect(() => {
    initiaLizeEmployers();
  }, [employersArray]);

  return (
    <Information
      directEmployers={direct}
      noDirectEmployers={noDirect}
      userName={match.params.empName}
      vacancy={vacancy}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    employersArray: state.empTree.employersArray, 
    vacancy: state.empTree.vacancy,
  };
};

export default withRouter(connect(mapStateToProps, {})(InformationContainer));
