import axios from "axios";
import { returnErrors } from "./messages";
import { AsyncAppThunk, TokenConfig, User } from './actions.types';

import * as c from "./action-constants";

// CHECK TOKEN & LOAD USER
export const loadUser = (token: string): AsyncAppThunk => async (dispatch) => {
  // User Loading
  dispatch({ type: c.USER_LOADING });

  try {
    const res = await axios.get("/api/auth/user", tokenConfig(token));
    dispatch({
      type: c.USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: c.AUTH_ERROR,
    });
  }
};

// LOGIN USER
export const login = (username: string, password: string): AsyncAppThunk => 
  async (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  try {
  const res = await axios.post("/api/auth/login", body, config);
    dispatch({
      type: c.LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: c.LOGIN_FAIL,
    });
  }
};

// REGISTER USER
export const register = ({ username, password, email }: User): AsyncAppThunk =>
  async (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post("/api/auth/register", body, config);
    dispatch({
      type: c.REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch(err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: c.REGISTER_FAIL,
    });
  }
};

// LOGOUT USER
export const logout = (token: string): AsyncAppThunk => async (dispatch) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const res = await axios.post(
      "/api/auth/logout/", 
      null, 
      tokenConfig(token)
      );

      // dispatch({ type: "CLEAR_LEADS" });
      dispatch({ type: c.LOGOUT_SUCCESS });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

// Setup config with token - helper function
export const tokenConfig = (token: string): TokenConfig => {

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
