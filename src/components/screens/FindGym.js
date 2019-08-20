import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { MapView, GymCragListItem } from "../../common-components";
import { getMap } from "../../actions";
import { getGyms } from "../../actions/gymCrag";
import {
  GYMS,
  DETAIL,
  LATITUDE,
  LONGITUDE,
  USER_LOCATION_UNAVAILABLE,
  MAX_DISTANCE,
  NO_DISTANCES
} from "../../types";
import usersLocation from "../../services/usersLocation";
import { getDistances } from "../../services/getDistances";
import "./styles/FindGymCrag.css";

const getGymList = (map, usersLoc, locations) => {
  let gymLocs = [];
  let gymItems = locations.map(gymLocation => {
    const detail = gymLocation[DETAIL];
    gymLocs = [
      ...gymLocs,
      new window.google.maps.LatLng(
        gymLocation[LATITUDE],
        gymLocation[LONGITUDE]
      )
    ];

    return GymCragListItem({
      detail: detail,
      key: detail,
      loc: {
        lat: gymLocation[LATITUDE],
        lng: gymLocation[LONGITUDE]
      },
      map: map,
      usersLoc: usersLoc
    });
  });

  return { gymLocs, gymItems };
};

const FindGym = ({ map, gyms, getGyms }) => {
  const [list, setList] = useState(null);
  const [usersLoc, setUsersLoc] = useState(USER_LOCATION_UNAVAILABLE);
  if (gyms === null) getGyms();

  useEffect(() => {
    (async () => {
      try {
        setUsersLoc(await usersLocation());
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    const fetchGyms = async locations => {
      let { gymLocs, gymItems } = getGymList(map, usersLoc, locations);
      const distances = await getDistances(gymLocs, usersLoc);

      let i = 0;
      let distGymItems = gymItems.map(gymItem => {
        if (
          distances !== null &&
          distances.originAddresses[0] !== NO_DISTANCES
        ) {
          gymItem.distance = distances.rows[0].elements[i].distance.value;
          i++;
        }
        return gymItem;
      });

      if (distGymItems.length > 0 && distGymItems[0].distance !== undefined) {
        distGymItems = _.sortBy(distGymItems, ["distance"]);
      }

      setList(distGymItems);
    };

    if (map && gyms !== null && usersLoc !== undefined) {
      fetchGyms(gyms.data.locations);
    }
  }, [map, usersLoc, gyms]);

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
      <MapView toFind={GYMS} />
      <div id="gymRouteList" className="ui divided list">
        <h4> Climbing Gyms (Distance Increasing) </h4>
        {displayList()}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { map: state.map, gyms: state.gyms };
};

export default connect(
  mapStateToProps,
  { getMap, getGyms }
)(FindGym);
