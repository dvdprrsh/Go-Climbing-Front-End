import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { MapView, GymCragListItem } from "../../common-components";
import { getMap } from "../../actions";
import { locations as gymLocations } from "../../apis/eSWGymLocations";
import {
  GYMS,
  DETAIL,
  LATITUDE,
  LONGITUDE,
  USER_LOCATION_UNAVAILABLE,
  MAX_DISTANCE
} from "../../types";
import usersLocation from "../../services/usersLocation";
import { getDistance } from "../../services/getDistances";
import "./styles/FindGymCrag.css";

const getGymList = (map, usersLoc) => {
  let gymLocs = [];
  let gymItems = gymLocations.map(gymLocation => {
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

const FindGym = ({ map }) => {
  const [list, setList] = useState(gymLocations);
  useEffect(() => {
    const fetchGyms = async () => {
      const usersLoc = await usersLocation();
      let { gymLocs, gymItems } = getGymList(map, usersLoc);
      const distances = await getDistance(gymLocs, usersLoc);

      let i = 0;
      let distGymItems = gymItems.map(gymItem => {
        if (distances !== null) {
          gymItem.distance = distances.rows[0].elements[i].distance.value;
          i++;
        } else {
        }
        return gymItem;
      });

      if (distGymItems.length > 0 && distGymItems[0].distance !== undefined) {
        distGymItems = _.sortBy(distGymItems, ["distance"]);
      }

      setList(distGymItems);
    };
    fetchGyms();
  }, [map]);

  const displayList = () => {
    if (list !== gymLocations) {
      if (list[0].distance === MAX_DISTANCE) {
        return list.map(listItem => listItem.item(USER_LOCATION_UNAVAILABLE));
      }
      return list.map(listItem => listItem.item(listItem.distance));
    } else {
      return list.map(listItem =>
        GymCragListItem({
          detail: listItem[DETAIL],
          key: listItem[DETAIL],
          loc: {
            lat: listItem[LATITUDE],
            lng: listItem[LONGITUDE]
          },
          map: map
        }).item(USER_LOCATION_UNAVAILABLE)
      );
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
  return { map: state.map };
};

export default connect(
  mapStateToProps,
  { getMap }
)(FindGym);
