export const getGeo = (): Promise<GeolocationPosition> =>
  new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {});
  });

//devuelve objeto geolocationposition {coords:{}}
