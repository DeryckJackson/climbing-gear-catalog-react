import { combineReducers } from "redux";
import gearListReducer from "./gear-list-reducer";
import errorReducer from "./error-reducer";
import messagesReducer from "./messages-reducer";

const rootReducer = combineReducers({
  gearList: gearListReducer,
  errors: errorReducer,
  messages: messagesReducer,
});

export default rootReducer;
