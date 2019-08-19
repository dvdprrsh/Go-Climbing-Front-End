import React from "react";
import "./common-styles/GymCragListItem.css";

import { USER_LOCATION_UNAVAILABLE, MAX_DISTANCE } from "../types";

const onClicked = (markerLocation, map) => {
  if (map) {
    let latLng = new window.google.maps.LatLng(
      markerLocation.lat,
      markerLocation.lng
    );
    map.map.map.panTo(latLng);
  }
};

export const GymCragListItem = ({ detail, key, loc, map }) => {
  return {
    distance: MAX_DISTANCE,
    item: distance => {
      const renderDistance = () => {
        if (distance !== USER_LOCATION_UNAVAILABLE) {
          return `${Math.round((distance / 1609.344) * 100) / 100}miles`;
        } else {
          return distance;
        }
      };

      return (
        <div
          onClick={() => onClicked(loc, map)}
          style={{ cursor: "pointer" }}
          className="item"
          key={key}
        >
          <i className="red map marker icon middle aligned" />
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: detail + `<br/>Est. Distance: ${renderDistance()}`
            }}
          />
        </div>
      );
    }
  };
};
