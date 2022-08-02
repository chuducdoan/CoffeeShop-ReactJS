import { combineReducers } from "redux";
import authReducer from "./auth";
import cartReducer from "./cart";

const rootReducer = combineReducers({
    authRed: authReducer,
    cartRed: cartReducer
})

export default rootReducer;