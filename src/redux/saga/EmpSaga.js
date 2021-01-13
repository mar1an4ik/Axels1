import {
    api
} from "../../api/api";
import {
    put,
    call,
    takeEvery
} from "redux-saga/effects"
import {
    setEmpAC,
    setEmpSagaType
} from "./../EmpReducer"

function* getEmpWorker(action) {
    let data = yield call(api.getEmp, action.userName);
    yield put(setEmpAC(data, action.userName))
}

export function* getEmpwatcher() {
    yield takeEvery(setEmpSagaType, getEmpWorker);
}