import GoClimbingAPI from "../../apis/GoClimbingAPI";
import { GET_CRAGS, GET_GYMS } from "../types";

import { renderError } from "../../services/errorMessage";

export const getCrags = () => async dispatch => {
  try {
    const response = await GoClimbingAPI.get("/crags");
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
    const response = await GoClimbingAPI.get("/gyms");
    dispatch({
      type: GET_GYMS,
      payload: response
    });
  } catch (error) {
    renderError(error);
  }
};
