import React from "react";

const onClicked = (markerLocation, map) => {
  if (map) {
    let latLng = new window.google.maps.LatLng(
      markerLocation.lat,
      markerLocation.lng
    );
    map.map.map.panTo(latLng);
  }
};

export const GymRouteListItem = ({ detail, key, loc, map }) => (
  <div
    onClick={() => onClicked(loc, map)}
    style={{ cursor: "pointer" }}
    className="item"
    key={key}
  >
    <i className="red map marker icon middle aligned" />
    <div className="content" dangerouslySetInnerHTML={{ __html: detail }} />
  </div>
);
