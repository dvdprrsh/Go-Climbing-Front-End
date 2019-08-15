import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { MapView, GymCragListItem } from "../../common-components";
import { getMap } from "../../actions";
import { locations as gymLocations } from "../../apis/eSWGymLocations";
import { GYMS, DETAIL, LATITUDE, LONGITUDE } from "../../types";
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
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchGyms = async () => {
      let { gymLocs, gymItems } = await getGymList(map);
      const distances = await getDistance(gymLocations, await usersLocation());
      let i = 0;

      gymItems.map(gymItem => {
        gymItem.distance = distances.rows[0].elements[i].distance.value;
        i++;
      });

      if (gymLocs.length > 0 && gymLocs[0].distance !== undefined) {
        gymLocs = _.sortBy(gymLocs, ["distance"]);
      }
      setList(gymItems);
    };
    fetchGyms();
  }, [map]);

  if (list !== [null]) {
    return (
      <div id="gymRouteFlex">
        <MapView toFind={GYMS} />
        <div id="gymRouteList" className="ui divided list">
          <h4>Locations (sorted by travel distance) </h4>
          {list.map(listItem => listItem.item)}
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
)(FindGym);
