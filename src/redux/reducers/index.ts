import { combineReducers } from "redux";
import { loginState } from "./reducers/public/login";

const reducerIndex = combineReducers({ loginState });

export type RootReducerState = ReturnType<typeof reducerIndex>;

export default reducerIndex;
