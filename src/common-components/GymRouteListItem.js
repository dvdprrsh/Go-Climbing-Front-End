import React from "react";

const getDistance = async (loc, { position }) => {
  if (position.lat !== undefined) {
    let distance = null;
    const locations = {
      destination: new window.google.maps.LatLng(loc.lat, loc.lng),
      origin: new window.google.maps.LatLng(position.lat, position.lng)
    };

    const service = new window.google.maps.DistanceMatrixService();
    await service.getDistanceMatrix(
      {
        origins: [locations.origin],
        destinations: [locations.destination],
        travelMode: "DRIVING",
        unitSystem: window.google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
      },
      await function callback(response, status) {
        if (status == "OK") {
          var origins = response.originAddresses;

          for (var i = 0; i < origins.length; i++) {
            var results = response.rows[i].elements;
            for (var j = 0; j < results.length; j++) {
              var element = results[j];
              distance = element.distance.text;
            }
          }
        }
        console.log(distance);
        return distance;
      }
    );
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

export const GymRouteListItem = ({ detail, key, loc, map, usersLoc }) => ({
  distance: getDistance(loc, usersLoc).then(response => response),
  item: (
    <div
      onClick={() => onClicked(loc, map)}
      style={{ cursor: "pointer" }}
      className="item"
      key={key}
    >
      <i className="red map marker icon middle aligned" />
      <div className="content" dangerouslySetInnerHTML={{ __html: detail }} />
    </div>
  )
});
