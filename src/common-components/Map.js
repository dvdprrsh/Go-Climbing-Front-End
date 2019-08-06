import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const MapContainer = ({ google, lat, long }) => {
	return (
		<Map
			google={google}
			zoom={14}
			style={{ width: "100%", height: "100%" }}
			initialCenter={(lat, long)}
		/>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyAg3FF6ZCSmStzyLe9viIyoOC0M-3TdR20"
})(MapContainer);
