export const SET_EMP = `SET_EMP`;
export const SET_EMP_SAGA = `SET_EMP_SAGA`;

export interface ObjDirect {
  "direct-subordinates": Array<string>;
}
export let employersArrayType:[string, ObjDirect];

interface setEmpAC {
  type: typeof SET_EMP,
  employersArray: typeof employersArrayType,
  userName: string,
  error: string,
}

export type EmpActionTypes =  setEmpAC ;