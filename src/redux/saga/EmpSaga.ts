import { api } from "../../api/api";
import { put, call, takeEvery } from "redux-saga/effects";

import { SET_EMP_SAGA } from "./../reducers/EmpReducer"
import { setEmpAC } from "./../actions/employers/employersAC"

function* getEmpWorker(action: { type: typeof SET_EMP_SAGA, 
                                 userName : string, error : string }) {
    let data = yield call(api.getEmp, action.userName);
    yield put(setEmpAC(data, action.userName, data[1].error));
}

export function* getEmpwatcher() {
    yield takeEvery(SET_EMP_SAGA, getEmpWorker);
}