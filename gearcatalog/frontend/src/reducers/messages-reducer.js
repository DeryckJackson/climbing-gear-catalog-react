import * as c from "../actions/action-constants";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case c.CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}
