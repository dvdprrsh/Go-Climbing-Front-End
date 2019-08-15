import React from "react";
import "./common-styles/GymRouteListItem.css";

const getDistance = async (loc, position) => {
  if (position.lat !== undefined) {
    const locations = {
      destination: new window.google.maps.LatLng(loc.lat, loc.lng),
      origin: new window.google.maps.LatLng(position.lat, position.lng)
    };

    const service = new window.google.maps.DistanceMatrixService();
    return new Promise(resolve => {
      service.getDistanceMatrix(
        {
          origins: [locations.origin],
          destinations: [locations.destination],
          travelMode: "DRIVING",
          unitSystem: window.google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        },
        response => {
          let distance = 1000000;
          if (response) {
            distance = response.rows[0].elements[0].distance.value;
          }
          resolve(distance);
        }
      );
    });
  }
};

const onClicked = (markerLocation, map) => {
  if (map) {
    let latLng = new window.google.maps.LatLng(
      markerLocation.lat,
      markerLocation.lng
    );
    map.map.map.panTo(latLng);
  }
};

export const GymRouteListItem = async ({ detail, key, loc, map, usersLoc }) => {
  const distance = await getDistance(loc, usersLoc);

  return {
    distance: distance,
    item: (
      <div
        onClick={() => onClicked(loc, map)}
        style={{ cursor: "pointer" }}
        className="item"
        key={key}
      >
        <i className="red map marker icon middle aligned" />
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html:
              detail +
              `<br/>Est. Distance: ${Math.round(distance / 10) / 100}km`
          }}
        />
      </div>
    )
  };
};
