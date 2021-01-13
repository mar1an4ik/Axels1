import {
    applyMiddleware,
    combineReducers,
    createStore
} from "redux";
import EmpReducer from './EmpReducer'
import createSagaMiddleware from "redux-saga"
import {getEmpwatcher} from './saga/EmpSaga'

let reducers = combineReducers({
    empTree: EmpReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getEmpwatcher)

export default store;