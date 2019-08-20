import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Map as GoogleMap, GoogleApiWrapper } from "google-maps-react";
import { setMap, getMap } from "../actions";
import { getCrags, getGyms } from "../actions/gymCrag";
import { makeMarker } from "./";

import { GYMS, CRAGS, INITIAL_LOCATION } from "../types";

const Map = ({
  setMap,
  google,
  location,
  toFind,
  crags,
  getCrags,
  gyms,
  getGyms
}) => {
  const EMPTY_DETAIL = new google.maps.InfoWindow();
  const [markerDetail, setMarkerDetail] = useState(EMPTY_DETAIL);

  useEffect(() => {
    switch (toFind) {
      case CRAGS:
        if (crags === null) getCrags();
        break;
      case GYMS:
        if (gyms === null) getGyms();
        break;
      default:
        break;
    }
  });

  const renderCrags = map => crags.data.map(crag => cragMarker(map, crag));

  const renderGyms = map =>
    gyms.data.locations.map(gym =>
      makeMarker(map, google, gym, setMarkerDetail)
    );

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

    switch (toFind.toFind) {
      case CRAGS:
        if (crags !== null) renderCrags(map);
        break;
      case GYMS:
        if (gyms !== null) renderGyms(map);
        break;
      default:
        break;
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
      onReady={(mapProps, map) => fetchPlaces(mapProps, map)}
      onClick={onClick}
      initialCenter={INITIAL_LOCATION}
      centerAroundCurrentLocation={true}
      containerStyle={{ height: "93.5%", width: "70%" }}
    />
  );
};

const mapStateToProps = state => {
  return {
    map: state.map,
    panToPoint: state.panToPoint,
    crags: state.crags,
    gyms: state.gyms
  };
};

export default connect(
  mapStateToProps,
  { setMap, getMap, getCrags, getGyms }
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAg3FF6ZCSmStzyLe9viIyoOC0M-3TdR20"
  })(Map)
);
