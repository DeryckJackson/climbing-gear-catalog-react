import axios from "axios";
import { createMessage, returnErrors } from "./messages";

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
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE GEAR action
export const deleteGear = (id) => (dispatch) => {
  axios
    .delete(`/api/gear/${id}/`)
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
export const addGear = (gear) => (dispatch) => {
  axios
    .post(`/api/gear/`, gear)
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
