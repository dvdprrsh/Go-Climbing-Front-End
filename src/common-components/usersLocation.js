import { useState, useEffect } from "react";

export default () => {
	const [{ lat, lng }, setLocation] = useState({});
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			position =>
				setLocation({
					lat: position.coords.latitude,
					lng: position.coords.longitude
				}),
			error => setErrorMessage(error.message)
		);

	}, []);

	return { position: { lat, lng }, errorMessage };
};
