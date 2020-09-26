import axios from "axios";

import * as c from "./types";

export const getGear = () => (dispatch) => {
  axios
    .get("/api/gear/")
    .then((res) => {
      dispatch({
        type: c.GET_GEAR,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
