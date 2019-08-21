import GoClimbingAPI from "../../apis/GoClimbingAPI";
import WeatherAPI from "../../apis/WeatherAPI";

export const fetchPosts = () => async dispatch => {
  const response = await GoClimbingAPI.get("posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await GoClimbingAPI.get(`users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const getWeather = () => async dispatch => {
  const response = await WeatherAPI.get("");
  dispatch({ type: "FETCH_WEATHER", payload: response.data });
};
