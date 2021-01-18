import { put, call, takeEvery } from "redux-saga/effects";

import { api } from "../../api/api";
import { setUsersAC } from "../reducers/UsersReducer";
import { actionIds } from './../../typescript/types';

function* getUsersWorker() {
    let data = yield call(api.getUsers);
    yield put(setUsersAC(data));
}

export function* getUserswatcher() {
    yield takeEvery(actionIds.SET_USERS_SAGA, getUsersWorker);
}