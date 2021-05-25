import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "./NowWeather.module.scss";
import { Typography } from "@material-ui/core";

type PROPS = {
  center: {
    lat: number;
    lng: number;
  };
  // current: any;
  current: any;
};
// APIの設定
const googleApiKey = process.env.REACT_APP_GM_API_KEY;

const NowWeather: React.VFC<PROPS> = ({ center, current }) => {
  const [zoom, setZoom] = useState(10);

  let timeData = new Date(current.dt * 1000);

  return (
    <div className={styles.root}>
      <div className={styles.now_left}>
        <Typography className={styles.now} variant="body1">
          {timeData.toLocaleDateString()} 現在時刻
        </Typography>
        <Typography variant="h5">現在地</Typography>
        <Typography variant="h4">
          <span className={styles.circle}> ●</span>{" "}
          {Math.floor(current.main.temp)}℃
        </Typography>
        <div className={styles.temperature}>
          <Typography variant="body2">
            体感温度: {Math.floor(current.main.feels_like)}℃
          </Typography>
          <Typography variant="body2">
            最高温度: {current.main.temp_max}℃
          </Typography>
          <Typography variant="body2">
            最低温度: {current.main.temp_min}℃
          </Typography>
        </div>
        <div className={styles.detailed_status}>
          <Typography variant="body2">
            風: {current.wind.speed}m/s {current.wind.deg}寄りの風
          </Typography>
          <Typography variant="body2">
            気圧: {current.main.pressure}hPa
          </Typography>
          <Typography variant="body2">
            湿度: {current.main.humidity}%
          </Typography>
        </div>
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
