export const setEmp = `setEmp`;

export interface ObjDirect {
  "direct-subordinates": [];
  "error": string;
}


interface setEmpAC {
  type: typeof setEmp
  employersArray: [string,ObjDirect],
  userName: string,
  error: string,
}

export type EmpActionTypes =  setEmpAC