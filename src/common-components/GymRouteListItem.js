import React from "react";

const onClicked = (markerLocation, map) => {
  if (map) {
    console.log(map);
    // map.panTo(markerLocation.lat, markerLocation.lng);
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
