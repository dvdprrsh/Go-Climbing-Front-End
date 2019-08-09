import { LATITUDE, LONGITUDE, DETAIL } from "../types";

export const makeMarker = (map, google, location, setMarkerDetail) => {
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(location[LATITUDE], location[LONGITUDE]),
    map: map
  });

  marker.addListener("click", () => {
    const detail = new google.maps.InfoWindow({
      content: location[DETAIL]
    });
    detail.open(map, marker);
    setMarkerDetail(detail);
  });
};
