import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import * as c from "./types";

// GET GEAR action
export const getGear = (token) => (dispatch) => {
  axios
    .get("/api/gear/", tokenConfig(token))
    .then((res) => {
      dispatch({
        type: c.GET_GEAR,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE GEAR action
export const deleteGear = (id, token) => (dispatch) => {
  axios
    .delete(`/api/gear/${id}/`, tokenConfig(token))
    .then(() => {
      dispatch(createMessage({ gearDeleted: "Gear Deleted" }));
      dispatch({
        type: c.DELETE_GEAR,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// ADD GEAR action
export const addGear = (gear, token) => (dispatch) => {
  axios
    .post(`/api/gear/`, gear, tokenConfig(token))
    .then((res) => {
      dispatch(createMessage({ gearAdded: "Gear Added" }));
      dispatch({
        type: c.ADD_GEAR,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// SELECT GEAR action
export const selectGear = (id, token) => (dispatch) => {
  axios
    .get(`/api/gear/${id}/`, tokenConfig(token))
    .then((res) => {
      dispatch({
        type: c.SELECT_GEAR,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// EDIT GEAR action
export const editGear = (gear, token) => (dispatch) => {
  axios
    .put(`/api/gear/${gear.id}/`, gear, tokenConfig(token))
    .then((res) => {
      dispatch(createMessage({ gearUpdated: "Gear Updated" }));
      dispatch({
        type: c.EDIT_GEAR,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
