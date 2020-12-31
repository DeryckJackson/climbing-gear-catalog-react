import * as c from "../actions/action-constants";

const initialState = {
  gearList: [],
  selectedGear: {},
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
    case c.EDIT_GEAR:
    case c.ADD_GEAR:
      return {
        ...state,
        gearList: [...state.gearList, action.payload],
      };
    case c.SELECT_GEAR:
      return {
        ...state,
        selectedGear: action.payload,
      };
    default:
      return state;
  }
}
