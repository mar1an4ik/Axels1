
import { employersArrayType, EmpActionTypes } from "./../actions/employers/employersAC.d"


 export const SET_EMP_SAGA = `SET_EMP_SAGA`;

const initialState = {
    vacancy: "" as string,
    employersArray: [] as typeof employersArrayType | Array<string>, 
    userName: "" as string,
    error: "" as string,
};
export type InitialStateType = typeof initialState;


const EmpReducer = (state = initialState, action: EmpActionTypes):InitialStateType => {
    switch (action.type) {
        case "SET_EMP": {
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


export const setEmpSaga = (userName : string, error : string) => {
    return {
        type: SET_EMP_SAGA,
        userName: userName,
        error: error,
    }
} // треба винести кудась

export default EmpReducer;