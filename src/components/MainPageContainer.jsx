import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEmpSaga } from "../redux/EmpReducer";
import { connect } from "react-redux";
import MainPage from "./MainPage";

const MainPageContainer = (props) => {
  const dispatch = useDispatch();
  const [rendered, setRendered] = useState(false);

  let findClicked = (value) => {
    dispatch(setEmpSaga(value));
  };

  let changeUrl = () => {
    if (rendered && props.employersArray.length >= 1) {
      props.history.push(`/overview/` + props.userName);
      setRendered(false);
    } else setRendered(true);
  };

  useEffect(() => {
    changeUrl();
  }, [props.employersArray]);

  return (
    <div>
      <MainPage findClicked={findClicked} />
    </div>
  );
};

let stateGo = (state) => {
  return {
    employersArray: state.empTree.employersArray, // out array with emp
    userName: state.empTree.userName,
  };
};

export default connect(stateGo, {})(MainPageContainer);
