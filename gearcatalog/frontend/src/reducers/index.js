import { combineReducers } from "redux";
import gearListReducer from "./gear-list-reducer";
import errorRedcer from "./error-reducer";

const rootReducer = combineReducers({
  gearList: gearListReducer,
  errors: errorRedcer,
});

export default rootReducer;
