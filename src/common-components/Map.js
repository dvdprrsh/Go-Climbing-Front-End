import React, { useState } from "react";
import { Map as GoogleMap, GoogleApiWrapper } from "google-maps-react";
import { GYMS } from "../types";

import { locations } from "../apis/gymLocations";
import makeMarker from "./makeMarker";

const Map = ({
	google,
	location = { lat: 37.774929, lng: -122.419416 },
	toFind
}) => {
	const EMPTY_DETAIL = new google.maps.InfoWindow();
	const [markerDetail, setMarkerDetail] = useState(EMPTY_DETAIL);

	const renderGyms = map => {
		locations.map(location => {
			makeMarker(map, google, location, setMarkerDetail);
		});
	};

	const fetchPlaces = (_, map) => {
		if (toFind.toFind === GYMS) {
			renderGyms(map, google, markerDetail, setMarkerDetail);
		}
	};

	const onClick = () => {
		if (markerDetail !== EMPTY_DETAIL) {
			markerDetail.close();
		}
	};

	return (
		<GoogleMap
			google={google}
			zoom={14}
			onReady={fetchPlaces}
			onClick={onClick}
			initialCenter={location}
			center={location}
			containerStyle={{ height: "93.5%", width: "80%" }}
		/>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyAg3FF6ZCSmStzyLe9viIyoOC0M-3TdR20"
})(Map);
