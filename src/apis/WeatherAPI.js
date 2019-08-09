import axios from "axios";

export default axios.create({
  baseURL: "https://weather.cit.api.here.com/weather/1.0/report.json?"
});
