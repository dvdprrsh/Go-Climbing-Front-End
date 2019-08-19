import gymCragAPI from "../../apis/gymCragAPI";
import { GET_CRAGS, GET_GYMS } from "../types";

export const getCrags = () => async dispatch => {
  dispatch({
    type: GET_CRAGS,
    payload: await gymCragAPI.get("/cragLocations.json").data
  });
};

export const getGyms = () => async dispatch => {
  dispatch({
    type: GET_GYMS,
    payload: await gymCragAPI.get("/eSWGymLocations.json").data
  });
};
