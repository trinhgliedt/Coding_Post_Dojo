import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  // or we can do shorthand like below:
  // counterReducer,
  isLogged: loggedReducer,
});
export default allReducers;
