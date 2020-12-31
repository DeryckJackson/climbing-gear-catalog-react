import * as c from "./action-constants";

// CREATE MESSAGE action
export const createMessage = (msg) => {
  return {
    type: c.CREATE_MESSAGE,
    payload: msg,
  };
};

// RETURN ERRORS
export const returnErrors = (msg, status) => {
  return {
    type: c.GET_ERRORS,
    payload: { msg, status },
  };
};
