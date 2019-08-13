import axios from "axios";

export default axios.create({
  baseURL:
    "https://climbing-cors.herokuapp.com/https://empiredigital.eu/goclimbing/print.json"
});
