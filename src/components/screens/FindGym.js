import React from "react";
import { MapView, GymRouteListItem } from "../../common-components";
import { locations as gymLocations } from "../../apis/gymLocations";
import { GYMS, DETAIL, LATITUDE, LONGITUDE } from "../../types";

import "./styles/FindGym.css";

const renderLocationsList = () => {
  return gymLocations.map(gymLocation => {
    const detail = gymLocation[DETAIL];

    return GymRouteListItem({
      detail: detail,
      key: detail,
      loc: {
        lat: gymLocation[LATITUDE],
        lng: gymLocation[LONGITUDE]
      },
      map: Map
    });
  });
};

const Map = <MapView toFind={GYMS} />;

export const FindGym = () => (
  <div id="gymRouteFlex">
    {Map}
    <div id="gymRouteList" className="ui divided list">
      <h4>Locations</h4>
      {renderLocationsList()}
    </div>
  </div>
);
