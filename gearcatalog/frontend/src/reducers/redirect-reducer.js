import * as c from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case c.REDIRECT:
      return { redirect: action.payload };
    default:
      return state;
  }
}
