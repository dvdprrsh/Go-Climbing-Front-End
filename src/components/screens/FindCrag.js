import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { MapView, GymCragListItem } from "../../common-components";
import { getMap } from "../../actions";
import cragLocations from "../../apis/cragLocations";
import { CRAGS, USER_LOCATION_UNAVAILABLE } from "../../types";
import usersLocation from "../../services/usersLocation";

import "./styles/FindGymCrag.css";
import { getDistance } from "../../services/getDistances";

const getCragList = (map, usersLoc) => {
  let cragLocs = [];
  let cragItems = cragLocations.map(cragLocation => {
    const cragDetail = `${cragLocation.name} When To Go: ${
      cragLocation.whenToGo
    }`;
    cragLocs = [
      ...cragLocs,
      new window.google.maps.LatLng(
        cragLocation.location.lat,
        cragLocation.location.lng
      )
    ];

    return GymCragListItem({
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
  return { cragLocs, cragItems };
};

const FindCrag = ({ map }) => {
  const [list, setList] = useState(cragLocations);
  useEffect(() => {
    const fetchCrags = async () => {
      let usersLoc = await usersLocation();
      let { cragLocs, cragItems } = getCragList(map, usersLoc);
      const distances = await getDistance(cragLocs, usersLoc);
      let i = 0;
      let distCragItems = cragItems.map(cragItem => {
        cragItem.distance = distances.rows[0].elements[i].distance.value;
        i++;
        return cragItem;
      });
      if (distCragItems.length > 0 && distCragItems[0].distance !== undefined) {
        distCragItems = _.sortBy(distCragItems, ["distance"]);
      }
      setList(distCragItems);
    };
    fetchCrags();

    return function cleanup() {};
  }, [map]);

  const displayList = () => {
    if (list !== cragLocations) {
      return list.map(listItem => listItem.item(listItem.distance));
    } else {
      return list.map(listItem =>
        GymCragListItem({
          detail: `${listItem.name} When To Go: ${listItem.whenToGo}`,
          key: listItem.description,
          loc: {
            lat: listItem.location.lat,
            lng: listItem.location.lng
          },
          map: map
        }).item(USER_LOCATION_UNAVAILABLE)
      );
    }
  };

  return (
    <div id="gymRouteFlex">
      <MapView toFind={CRAGS} />
      <div id="gymRouteList" className="ui divided list">
        <h4>Crags (Distance Increasing)</h4>
        {displayList()}
        <div className="ui pointing label" style={{ flex: 1, width: "98%" }}>
          More to be added....
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { map: state.map };
};

export default connect(
  mapStateToProps,
  { getMap }
)(FindCrag);
