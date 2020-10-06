import * as c from "./types";

export const redirect = (link) => {
  return { type: c.REDIRECT, payload: link };
};
