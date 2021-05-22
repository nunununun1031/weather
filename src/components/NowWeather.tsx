import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "./NowWeather.module.scss";

type PROPS = {
  center: {
    lat: number;
    lng: number;
  };
};
// APIの設定
const googleApiKey = process.env.REACT_APP_GM_API_KEY;

const NowWeather: React.VFC<PROPS> = ({ center }) => {
  const [zoom, setZoom] = useState(10);

  return (
    <div className={styles.root}>
      <div className={styles.now_left}>
        <p>0月0日 現在時刻</p>
        <h3>現在地</h3>
        <h1>0℃</h1>
        <p></p>
        <p></p>
      </div>
      <div className={styles.now_right}>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: googleApiKey }}
          center={center}
          defaultZoom={zoom}
        ></GoogleMapReact> */}
      </div>
    </div>
  );
};

export default NowWeather;
