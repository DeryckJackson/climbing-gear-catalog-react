import axios from "axios";

import * as c from "./types";

// GET GEAR action
export const getGear = () => (dispatch) => {
  axios
    .get("/api/gear/")
    .then((res) => {
      dispatch({
        type: c.GET_GEAR,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: c.GET_ERRORS,
        payload: errors,
      });
    });
};

// DELETE GEAR action
export const deleteGear = (id) => (dispatch) => {
  axios
    .delete(`/api/gear/${id}/`)
    .then(() => {
      dispatch({
        type: c.DELETE_GEAR,
        payload: id,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: c.GET_ERRORS,
        payload: errors,
      });
    });
};

// ADD GEAR action
export const addGear = (gear) => (dispatch) => {
  axios
    .post(`/api/gear/`, gear)
    .then((res) => {
      dispatch({
        type: c.ADD_GEAR,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: c.GET_ERRORS,
        payload: errors,
      });
    });
};
