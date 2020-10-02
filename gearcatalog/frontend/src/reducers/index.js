import { combineReducers } from "redux";
import gearListReducer from "./gear-list-reducer";

const rootReducer = combineReducers({
  gearList: gearListReducer,
});

export default rootReducer;
