interface LngLat {
    lng: number;
    lat: number;
  }

  export interface Store {
    state: {
      readonly lngLat: LngLat,
    };
    set: (lngLat) => void;
    get: () => LngLat;
  }