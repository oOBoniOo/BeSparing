export const getGeo = (): Promise<GeolocationPosition> =>
  new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  });

//devuelve objeto geolocationposition {coords:{}}
