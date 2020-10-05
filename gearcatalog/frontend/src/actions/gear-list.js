import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import * as c from "./types";

// GET GEAR action
export const getGear = () => (dispatch, getState) => {
  axios
    .get("/api/gear/", tokenConfig(getState))
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
export const deleteGear = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/gear/${id}/`, tokenConfig(getState))
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
export const addGear = (gear) => (dispatch, getState) => {
  axios
    .post(`/api/gear/`, gear, tokenConfig(getState))
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
