import React from "react";
import Map from "./Map";
import Loading from "./Loading";
import usersLocation from "./usersLocation";

const MapView = toFind => {
	const { position, errorMessage } = usersLocation();
	return errorMessage || position !== undefined ? (
		<Map
			location={{ lat: position.lat, lng: position.lng }}
			toFind={toFind}
		/>
	) : (
		<Loading />
	);
};

export default MapView;
