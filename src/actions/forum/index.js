import forumJsonAPI from "../../apis/forumJsonAPI";
import WeatherAPI from "../../apis/WeatherAPI";

export const fetchPosts = () => async dispatch => {
  const response = await forumJsonAPI.get("");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await forumJsonAPI.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const getWeather = () => async dispatch => {
  const response = await WeatherAPI.get("");
  dispatch({ type: "FETCH_WEATHER", payload: response.data });
};
