import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "./NowWeather.module.scss";

interface MapCenter {
  lat: number;
  lng: number;
}

const ApiKey = "AIzaSyD03QZlCyt9rLMfBRhhVuiwEqcPtQOf5oU";
// const ApiKey = process.env.GOOGLE_MAP_API_KEY;
// console.log(ApiKey);

const NowWeather = () => {
  const [center, setCenter] = useState<MapCenter>({
    lat: 0,
    lng: 0,
  });
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (error) => setCenter({ lat: 35.661777, lng: 139.704051 })
    );
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.now_left}>
        <p>Now weather</p>
      </div>
      <div className={styles.now_right}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ApiKey }}
          center={center}
          defaultZoom={zoom}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default NowWeather;
