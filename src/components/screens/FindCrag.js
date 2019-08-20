import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { MapView, GymCragListItem } from "../../common-components";
import { getMap } from "../../actions";
import { getCrags } from "../../actions/gymCrag";
import {
  CRAGS,
  USER_LOCATION_UNAVAILABLE,
  MAX_DISTANCE,
  NO_DISTANCES
} from "../../types";
import usersLocation from "../../services/usersLocation";
import { getDistances } from "../../services/getDistances";
import "./styles/FindGymCrag.css";

const getCragList = (map, usersLoc, locations) => {
  let cragLocs = [];
  let cragItems = locations.map(cragLocation => {
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

const FindCrag = ({ map, crags, getCrags }) => {
  const [list, setList] = useState(null);
  const [usersLoc, setUsersLoc] = useState(USER_LOCATION_UNAVAILABLE);

  if (crags === null) getCrags();

  useEffect(() => {
    (async () => {
      try {
        setUsersLoc(await usersLocation());
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    const fetchCrags = async locations => {
      let { cragLocs, cragItems } = getCragList(map, usersLoc, locations);
      const distances = await getDistances(cragLocs, usersLoc);

      let i = 0;
      let distCragItems = cragItems.map(cragItem => {
        if (
          distances !== null &&
          distances.originAddresses[0] !== NO_DISTANCES
        ) {
          cragItem.distance = distances.rows[0].elements[i].distance.value;
          i++;
        }
        return cragItem;
      });

      if (distCragItems.length > 0 && distCragItems[0].distance !== undefined) {
        distCragItems = _.sortBy(distCragItems, ["distance"]);
      }

      setList(distCragItems);
    };

    if (map !== null && crags !== null) {
      fetchCrags(crags.data);
    }
  }, [map, usersLoc, crags]);

  const displayList = () => {
    if (list !== null) {
      if (list[0].distance === MAX_DISTANCE) {
        return list.map(listItem => listItem.item(USER_LOCATION_UNAVAILABLE));
      }
      return list.map(listItem => listItem.item(listItem.distance));
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
  return { map: state.map, crags: state.crags };
};

export default connect(
  mapStateToProps,
  { getMap, getCrags }
)(FindCrag);
