import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { MapView, GymRouteListItem } from "../../common-components";
import { getMap } from "../../actions";
import { locations as gymLocations } from "../../apis/eSWGymLocations";
import { GYMS, DETAIL, LATITUDE, LONGITUDE } from "../../types";
import usersLocation from "../../services/usersLocation";

import "./styles/FindGym.css";

const getGymList = async map => {
  const usersLoc = await usersLocation();
  if (!usersLoc) return;
  return await Promise.all(
    gymLocations.map(async gymLocation => {
      const detail = gymLocation[DETAIL];

      return await GymRouteListItem({
        detail: detail,
        key: detail,
        loc: {
          lat: gymLocation[LATITUDE],
          lng: gymLocation[LONGITUDE]
        },
        map: map,
        usersLoc: usersLoc
      });
    })
  );
};

const FindGym = ({ map }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchGyms = async () => {
      let tempList = await getGymList(map);
      console.log(tempList);
      if (tempList.length > 0 && tempList[0].distance !== undefined) {
        tempList = _.sortBy(tempList, ["distance"]);
      }
      setList(tempList);
    };
    fetchGyms();
  }, [map]);

  if (list !== [null]) {
    return (
      <div id="gymRouteFlex">
        <MapView toFind={GYMS} />
        <div id="gymRouteList" className="ui divided list">
          <h4>Locations (sorted by tavel distance) </h4>
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
