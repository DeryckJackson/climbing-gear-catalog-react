import * as c from "./types";

// CREATE MESSAGE action
export const createMessage = (msg) => {
  return {
    type: c.CREATE_MESSAGE,
    payload: msg,
  };
};
