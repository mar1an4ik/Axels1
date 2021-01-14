import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { EmpReducer ,UsersReducer } from './reducers'

import { rootWatcher } from "./saga/index";

    let reducers = combineReducers({
        empTree: EmpReducer,
        usersTree: UsersReducer,
    });
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootWatcher)

    export default store;