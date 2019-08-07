import React from "react";
import Map from "./Map";
import Loading from "./Loading";
import usersLocation from "./usersLocation";

const MapView = (toFind) => {
	const { position, errorMessage } = usersLocation();

	let content;
	if (errorMessage || position !== undefined) {
		content = <Map location={{ lat: position.lat, lng: position.lng }} toFind={toFind}/>;
	} else {
		content = <Loading />;
	}

	return <div>{content}</div>;
};

export default MapView;
