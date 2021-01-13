export const setEmpSagaType = `setEmpSaga`;
export const setEmp = `setEmp`;

let initialState = {
    vacancy: "",
    employersArray: [],
    userName: "",
};

const EmpReducer = (state = initialState, action) => {
    switch (action.type) {
         case "setEmp": {
            let statecopy = {
                ...state
            };
            statecopy.employersArray = [...state.employersArray]
            statecopy.vacancy = action.employersArray[0];
            statecopy.userName = action.userName
            statecopy.employersArray = action.employersArray[1]["direct-subordinates"];
            return statecopy;
        }
        default: {
            return state;
        }
    }
};

export const setEmpAC = (employersArray, userName) => {
    return {
        type: setEmp,
        employersArray: employersArray,
        userName: userName,
    }
}

export const setEmpSaga = (userName) => {
    return {
        type: setEmpSagaType,
        userName: userName
    }
}

export default EmpReducer;