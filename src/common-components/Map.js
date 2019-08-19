import React, { useState } from "react";
import { connect } from "react-redux";
import { Map as GoogleMap, GoogleApiWrapper } from "google-maps-react";
import { setMap, getMap } from "../actions";
import { GYMS, CRAGS } from "../types";
import { makeMarker } from "./";
import { locations as gymLocations } from "../apis/eSWGymLocations";
import cragLocations from "../apis/cragLocations";

const initLocation = { lat: 37.774929, lng: -122.419416 };

const Map = ({ setMap, google, location, toFind }) => {
  const EMPTY_DETAIL = new google.maps.InfoWindow();
  const [markerDetail, setMarkerDetail] = useState(EMPTY_DETAIL);

  const renderGyms = map =>
    gymLocations.map(gym => makeMarker(map, google, gym, setMarkerDetail));

  const renderCrags = map => cragLocations.map(crag => cragMarker(map, crag));

  const cragMarker = (map, crag) => {
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(crag.location.lat, crag.location.lng),
      map: map
    });

    marker.addListener("click", () => {
      const detail = new google.maps.InfoWindow({
        content: `${crag.name} ${crag.description} <br> <b> When To Go: ${
          crag.whenToGo
        } </b></br>`
      });
      detail.open(map, marker);
      setMarkerDetail(detail);
    });
  };

  const fetchPlaces = (mapProps, map) => {
    setMap({ map });
    if (
      location !== undefined &&
      (location.lat !== undefined || location.lng !== undefined)
    ) {
      new window.google.maps.Marker({
        position: location,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 6,
          strokeColor: "#4285F4",
          strokeOpacity: 0.4,
          fillColor: "#4285F4",
          fillOpacity: 1.0
        },
        draggable: false,
        map: map
      });
    }

    if (toFind.toFind === GYMS) {
      renderGyms(map);
    } else if (toFind.toFind === CRAGS) {
      renderCrags(map);
    }
  };

  const onClick = () => {
    if (markerDetail !== EMPTY_DETAIL) {
      markerDetail.close();
    }
  };

  return (
    <GoogleMap
      id="map"
      google={google}
      zoom={14}
      onReady={fetchPlaces}
      onClick={onClick}
      initialCenter={initLocation}
      centerAroundCurrentLocation={true}
      containerStyle={{ height: "93.5%", width: "70%" }}
    />
  );
};

const mapStateToProps = state => {
  return { map: state.map, panToPoint: state.panToPoint };
};

export default connect(
  mapStateToProps,
  { setMap, getMap }
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAg3FF6ZCSmStzyLe9viIyoOC0M-3TdR20"
  })(Map)
);
