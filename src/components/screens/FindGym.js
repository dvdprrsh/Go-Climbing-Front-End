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
  USER_LOCATION_UNAVAILABLE
} from "../../types";
import usersLocation from "../../services/usersLocation";
import { getDistance } from "../../services/getDistances";
import "./styles/FindGymCrag.css";

const getGymList = async map => {
  const usersLoc = await usersLocation();
  if (!usersLoc) return;
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
      let { gymLocs, gymItems } = await getGymList(map);
      const distances = await getDistance(gymLocs, await usersLocation());
      let i = 0;
      gymItems.map(gymItem => {
        gymItem.distance = distances.rows[0].elements[i].distance.value;
        i++;
      });

      if (gymItems.length > 0 && gymItems[0].distance !== undefined) {
        gymItems = _.sortBy(gymItems, ["distance"]);
      }

      setList(gymItems);
    };
    fetchGyms();
  }, [map]);

  const displayList = () => {
    if (list !== gymLocations) {
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
        <h4> Locations (sorted by travel distance) </h4>
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
