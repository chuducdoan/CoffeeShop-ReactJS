import { combineReducers } from "redux";
import authReducer from "./auth";

const rootReducer = combineReducers({
    authRed: authReducer
})

export default rootReducer;