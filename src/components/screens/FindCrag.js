import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { MapView, GymCragListItem } from "../../common-components";
import { getMap } from "../../actions";
import cragLocations from "../../apis/cragLocations";
import { CRAGS } from "../../types";
import usersLocation from "../../services/usersLocation";

import "./styles/FindGymCrag.css";
import { getDistance } from "../../services/getDistances";

const getCragList = async map => {
  const usersLoc = await usersLocation();
  if (!usersLoc) return;
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
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchCrags = async () => {
      let { cragLocs, cragItems } = await getCragList(map);
      const distances = await getDistance(cragLocs, await usersLocation());
      let i = 0;
      cragItems.map(cragItem => {
        cragItem.distance = distances.rows[0].elements[i].distance.value;
        i++;
      });
      if (cragItems.length > 0 && cragItems[0].distance !== undefined) {
        cragItems = _.sortBy(cragItems, ["distance"]);
      }
      console.log(cragItems);
      setList(cragItems);
    };
    fetchCrags();
  }, [map]);

  if (list !== [null]) {
    return (
      <div id="gymRouteFlex">
        <MapView toFind={CRAGS} />
        <div id="gymRouteList" className="ui divided list">
          <h4>Crags</h4>
          {list.map(listItem => listItem.item(listItem.distance))}
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
