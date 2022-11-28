import counterReducer from "./counterReducer";
import moneyReducer from "./moneyReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    count: counterReducer,
    money: moneyReducer
})

export default rootReducer;