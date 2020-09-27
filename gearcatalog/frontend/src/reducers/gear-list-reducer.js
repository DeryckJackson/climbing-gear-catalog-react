import * as c from "../actions/types.js";

const initialState = {
  gearList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case c.GET_GEAR:
      return {
        ...state,
        gearList: action.payload,
      };
    default:
      return state;
  }
}
