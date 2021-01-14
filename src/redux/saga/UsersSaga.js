import { put, call, takeEvery } from "redux-saga/effects";

import { api } from "../../api/api";
import { setUsersAC, setUsersSagaType } from "../reducers/UsersReducer";

function* getUsersWorker() {
    let data = yield call(api.getUsers);
    yield put(setUsersAC(data));
}

export function* getUserswatcher() {
    yield takeEvery(setUsersSagaType, getUsersWorker);
}