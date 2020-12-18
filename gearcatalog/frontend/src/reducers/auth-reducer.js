import * as c from '../actions/types';

const initialState = {
  // eslint-disable-next-line no-undef
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case c.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case c.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case c.LOGIN_SUCCESS:
    case c.REGISTER_SUCCESS:
      // eslint-disable-next-line no-undef
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case c.AUTH_ERROR:
    case c.LOGIN_FAIL:
    case c.LOGOUT_SUCCESS:
    case c.REGISTER_FAIL:
      // eslint-disable-next-line no-undef
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
