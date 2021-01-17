import { all } from "redux-saga/effects";

import { getEmpwatcher } from "./EmpSaga";
import { getUserswatcher } from "./UsersSaga";

export function* rootWatcher() {
  yield all([getEmpwatcher(), getUserswatcher()])
}