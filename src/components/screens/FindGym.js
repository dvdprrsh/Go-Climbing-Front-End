import React from "react";
import { MapView } from "../../common-components";
import { locations } from "../../apis/gymLocations";
import { GYMS, DETAIL } from "../../types";

import "./styles/FindGym.css";

const renderList = () => {
  return locations.map(location => {
    const detail = location[DETAIL];
    return (
      <div className="item" key={location[DETAIL]}>
        <i className="map marker icon" />
        <div className="content" dangerouslySetInnerHTML={{ __html: detail }} />
      </div>
    );
  });
};

const FindGym = () => (
  <div id="gymFlex">
    <div>
      <MapView toFind={GYMS} />
    </div>
    <div id="gymList" className="ui divided list">
      <h4>Locations</h4>
      {renderList()}
    </div>
  </div>
);

export default FindGym;
