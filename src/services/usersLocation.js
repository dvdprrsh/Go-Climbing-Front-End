export default async () => {
  const position = await new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      position => resolve(position.coords),
      error => reject(error)
    );
  });

  return { lat: position.latitude, lng: position.longitude };
};
