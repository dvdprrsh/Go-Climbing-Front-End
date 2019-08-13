import React from "react";
import { connect } from "react-redux";
import { MapView, GymRouteListItem } from "../../common-components";
import { getMap } from "../../actions";
import cragLocations from "../../apis/cragLocations";
import { CRAGS } from "../../types";
import usersLocation from "../../common-components/usersLocation";
import "./styles/FindGym.css";

const sortCragsList = map => {
  const usersLoc = usersLocation();
  return cragLocations.map(cragLocation => {
    const cragDetail = `${cragLocation.name} When To Go: ${
      cragLocation.whenToGo
    }`;

    return GymRouteListItem({
      detail: cragDetail,
      key: cragLocation.description,
      loc: {
        lat: cragLocation.location.lat,
        lng: cragLocation.location.lng
      },
      map: map,
      usersLoc: usersLoc
    });
  });
};

const renderCragsList = () => {
  console.log(sortCragsList());
};

const FindCrag = ({ map }) => (
  <div id="gymRouteFlex">
    <MapView toFind={CRAGS} />
    <div id="gymRouteList" className="ui divided list">
      <h4>Crags</h4>
      {renderCragsList(map)}
      <div className="ui pointing label" style={{ flex: 1, width: "98%" }}>
        More to be added....
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return { map: state.map };
};

export default connect(
  mapStateToProps,
  { getMap }
)(FindCrag);
