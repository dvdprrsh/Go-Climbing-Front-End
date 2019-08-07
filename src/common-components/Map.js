import React from "react";
import { Map as GoogleMap, GoogleApiWrapper } from "google-maps-react";
import { locations } from "../apis/gymLocations";
import { GYMS, LATITUDE, LONGITUDE, DETAIL } from "../types";

const Map = ({
	google,
	location = { lat: 37.774929, lng: -122.419416 },
	toFind
}) => {
	const fetchGyms = map => {
		locations.map(location => {
			const marker = new google.maps.Marker({
				position: new google.maps.LatLng(
					location[LATITUDE],
					location[LONGITUDE]
				),
				map,
				detail: location[DETAIL]
			});

			google.maps.event.addListener(marker, "click", () => {
				const detail = new google.maps.InfoWindow();
				console.log(marker);

				detail.setContent(marker.detail);
				detail.open(map, marker);
			});
		});
	};

	const fetchPlaces = (_, map) => {
		if (toFind.toFind === GYMS) {
			fetchGyms(map);
		}
	};

	return (
		<div>
			<GoogleMap
				google={google}
				zoom={14}
				onReady={fetchPlaces}
				initialCenter={location}
				center={location}
				style={{ width: "100%", height: "100%", position: "relative" }}
			/>
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyAg3FF6ZCSmStzyLe9viIyoOC0M-3TdR20"
})(Map);
