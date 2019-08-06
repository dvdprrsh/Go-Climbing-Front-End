import axios from "axios";
const KEY = "AIzaSyAg3FF6ZCSmStzyLe9viIyoOC0M-3TdR20";

export default axios.create({
	baseURL: "https://maps.googleapis.com/maps/api/",
	params: {}
});
