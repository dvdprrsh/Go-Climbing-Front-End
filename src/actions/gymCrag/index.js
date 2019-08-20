import gymCragAPI from "../../apis/gymCragAPI";
import { GET_CRAGS, GET_GYMS } from "../types";

export const getCrags = () => async dispatch => {
  const response = await gymCragAPI.get("/cragLocations.json");
  dispatch({
    type: GET_CRAGS,
    payload: response
  });
};

export const getGyms = () => async dispatch => {
  const response = await gymCragAPI.get("/eSWGymLocations.json");
  dispatch({
    type: GET_GYMS,
    payload: response
  });
};
