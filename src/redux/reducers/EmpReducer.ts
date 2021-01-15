import { EmpActionTypes } from "./../../typescript/types"

export const setEmpSagaType = `setEmpSaga`;
export const setEmp = `setEmp`;

const initialState = {
    vacancy: "",
    employersArray: [],
    userName: "",
    error: "",
};



const EmpReducer = (state = initialState, action:EmpActionTypes) => {
    switch (action.type) {
        case "setEmp": {
            const statecopy = {
                ...state
            };
          
            statecopy.employersArray = [...state.employersArray]
            statecopy.vacancy = action.employersArray[0];
            statecopy.userName = action.userName
            if (action.employersArray[1] && action.employersArray[1]["direct-subordinates"]) {
                statecopy.employersArray = action.employersArray[1]["direct-subordinates"];
                statecopy.error = action.error;
            } else {
                statecopy.error = "";
                statecopy.employersArray = [""];
            }
            return statecopy;
        }
        default: {
            return state;
        }
    }
};

export const setEmpAC = (employersArray, userName, error):EmpActionTypes => {
    return {
        type: setEmp,
        employersArray: employersArray,
        userName: userName,
        error: error,

    }
}

export const setEmpSaga = (userName, error) => {
    return {
        type: setEmpSagaType,
        userName: userName,
        error: error,
    }
}

export default EmpReducer;