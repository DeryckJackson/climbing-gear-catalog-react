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
    case c.DELETE_GEAR:
      return {
        ...state,
        gearList: state.gearList.filter((gear) => gear.id !== action.payload),
      };
    case c.ADD_GEAR:
      return {
        ...state,
        gearList: [...state.gearList, action.payload],
      };
    default:
      return state;
  }
}