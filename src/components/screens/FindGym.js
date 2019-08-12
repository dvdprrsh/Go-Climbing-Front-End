import React from "react";
import { connect } from "react-redux";
import { MapView, GymRouteListItem } from "../../common-components";
import { getMap } from "../../actions";
import { locations as gymLocations } from "../../apis/gymLocations";
import { GYMS, DETAIL, LATITUDE, LONGITUDE } from "../../types";

import "./styles/FindGym.css";

const renderLocationsList = map => {
  return gymLocations.map(gymLocation => {
    const detail = gymLocation[DETAIL];

    return GymRouteListItem({
      detail: detail,
      key: detail,
      loc: {
        lat: gymLocation[LATITUDE],
        lng: gymLocation[LONGITUDE]
      },
      map: map
    });
  });
};

const FindGym = ({ map }) => (
  <div id="gymRouteFlex">
    <MapView toFind={GYMS} />
    <div id="gymRouteList" className="ui divided list">
      <h4>Locations</h4>
      {renderLocationsList(map)}
    </div>
  </div>
);

const mapStateToProps = state => {
  return { map: state.map };
};

export default connect(
  mapStateToProps,
  { getMap }
)(FindGym);
