import { combineReducers } from 'redux';
import gearListReducer from './gear-list-reducer';
import errorReducer from './error-reducer';
import messagesReducer from './messages-reducer';
import authReducer from './auth-reducer';
import redirectReducer from './redirect-reducer';

const rootReducer = combineReducers({
  gearList: gearListReducer,
  errors: errorReducer,
  messages: messagesReducer,
  auth: authReducer,
  redirect: redirectReducer,
});

export default rootReducer;
