import { employersArrayType, SET_EMP, EmpActionTypes } from "./employersAC.d"


export const setEmpAC = (employersArray : typeof employersArrayType, 
                        userName : string, error : string) : EmpActionTypes => {
  return {
    type: SET_EMP,
    employersArray: employersArray,
    userName: userName,
    error: error,
  };
} 