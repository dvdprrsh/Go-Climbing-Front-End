import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { MapView, GymRouteListItem } from "../../common-components";
import { getMap } from "../../actions";
import cragLocations from "../../apis/cragLocations";
import { CRAGS } from "../../types";
import usersLocation from "../../services/usersLocation";

import "./styles/FindGym.css";

const getCragList = async map => {
  const usersLoc = await usersLocation();
  if (!usersLoc) return;
  return await Promise.all(
    cragLocations.map(async cragLocation => {
      const cragDetail = `${cragLocation.name} When To Go: ${
        cragLocation.whenToGo
      }`;
      return await GymRouteListItem({
        detail: cragDetail,
        key: cragLocation.description,
        loc: {
          lat: cragLocation.location.lat,
          lng: cragLocation.location.lng
        },
        map: map,
        usersLoc: usersLoc
      });
    })
  );
};

const FindCrag = ({ map }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchCrags = async () => {
      let tempList = await getCragList(map);
      if (tempList.length > 0 && tempList[0].distance !== undefined) {
        tempList = _.sortBy(tempList, ["distance"]);
      }
      setList(tempList);
    };
    fetchCrags();
  }, [map]);

  if (list !== [null]) {
    return (
      <div id="gymRouteFlex">
        <MapView toFind={CRAGS} />
        <div id="gymRouteList" className="ui divided list">
          <h4>Crags</h4>
          {list.map(listItem => listItem.item)}
          <div className="ui pointing label" style={{ flex: 1, width: "98%" }}>
            More to be added....
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { map: state.map };
};

export default connect(
  mapStateToProps,
  { getMap }
)(FindCrag);
