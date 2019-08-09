import React from "react";
import { MapView, GymRouteListItem } from "../../common-components";
import cragLocations from "../../apis/cragLocations";
import { CRAGS } from "../../types";

import "./styles/FindGym.css";

const renderCragsList = () => {
  return cragLocations.map(cragLocation => {
    const cragDetail = `${cragLocation.name} When To Go: ${
      cragLocation.whenToGo
    }`;

    return GymRouteListItem({
      detail: cragDetail,
      key: cragLocation.description,
      markerLocation: {
        lat: cragLocation.location.lat,
        lng: cragLocation.location.lng
      }
    });
  });
};

export const FindRoute = () => (
  <div id="gymRouteFlex">
    <MapView toFind={CRAGS} />
    <div id="gymRouteList" className="ui divided list">
      <h4>Crags</h4>
      {renderCragsList()}
      <div className="ui pointing label" style={{ flex: 1, width: "98%" }}>
        More to be added....
      </div>
    </div>
  </div>
);
