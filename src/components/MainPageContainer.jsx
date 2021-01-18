import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import { MainPage } from "./../components";

import { setEmpSaga } from "../redux/reducers/EmpReducer";
import { setUsersSaga } from "../redux/reducers/UsersReducer";

const MainPageContainer = ({users,userName,employersArray,error,history}) => {
  const dispatch = useDispatch();
  const [rendered, setRendered] = useState(false);

  const usersJSX = users.map((person) => {
    return <li>{person}</li>;
  });

  const findClicked = (value) => {
    if (value) dispatch(setEmpSaga(value));
  };

  const changeUrl = () => {
    if (rendered && employersArray.length >= 1) {
      history.push(`/overview/` + userName);
      setRendered(false);
    } else {
      setRendered(true);
    }
  };

  useEffect(() => {
    changeUrl();
  }, [employersArray]);
  useEffect(() => {
    dispatch(setUsersSaga());
  }, []);

  return (
    <div>
      <MainPage
        users={usersJSX}
        error={error}
        findClicked={findClicked}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    employersArray: state.empTree.employersArray, 
    userName: state.empTree.userName,
    error: state.empTree.error,
    users: state.usersTree.users,
  };
};

export default connect(mapStateToProps, {})(MainPageContainer);
