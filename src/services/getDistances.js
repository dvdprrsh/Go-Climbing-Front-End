export const getDistance = async (locs, position) => {
  let origin;
  if (position.lat !== undefined) {
    origin = new window.google.maps.LatLng(position.lat, position.lng);
  }

  const service = new window.google.maps.DistanceMatrixService();
  return new Promise(resolve => {
    service.getDistanceMatrix(
      {
        origins: [origin],
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
