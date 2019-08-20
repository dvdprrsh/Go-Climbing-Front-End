export const getDistances = async (locs, position) => {
  return new Promise(resolve => {
    new window.google.maps.DistanceMatrixService().getDistanceMatrix(
      {
        origins: [new window.google.maps.LatLng(position.lat, position.lng)],
        destinations: locs,
        travelMode: "DRIVING",
        unitSystem: window.google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false
      },
      response => {
        resolve(response);
      }
    );
  });
};
