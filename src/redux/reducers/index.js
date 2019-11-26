import { combineReducers } from "redux";
import todos from "./todo";
import visibility from "./visibility";

export default combineReducers({
  todos,
  visibility
});
