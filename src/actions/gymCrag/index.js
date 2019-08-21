import gymCragAPI from "../../apis/gymCragAPI";
import { GET_CRAGS, GET_GYMS } from "../types";

import { renderError } from "../../services/errorMessage";

export const getCrags = () => async dispatch => {
  try {
    const response = await gymCragAPI.get("/cragLocations.json");
    dispatch({
      type: GET_CRAGS,
      payload: response
    });
  } catch (error) {
    renderError(error);
  }
};

export const getGyms = () => async dispatch => {
  try {
    const response = await gymCragAPI.get("/eSWGymLocations.json");
    dispatch({
      type: GET_GYMS,
      payload: response
    });
  } catch (error) {
    renderError(error);
  }
};
