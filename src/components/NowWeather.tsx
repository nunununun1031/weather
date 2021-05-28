import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import styles from "./NowWeather.module.scss";
import { Typography } from "@material-ui/core";

type PROPS = {
  center: {
    lat: number;
    lng: number;
  };
  // current: any;
  current: any;
  input: string;
};
// APIの設定
const googleApiKey: any = process.env.REACT_APP_GM_API_KEY;

// 地図の大きさ
const containerStyle = {
  width: "100%",
  height: "200px",
};

const NowWeather: React.VFC<PROPS> = ({ center, current, input }) => {
  const [zoom, setZoom] = useState(10);

  let timeData = new Date(current.dt * 1000);

  const direction = (d: any) => {
    const dir = Math.floor(d / 45);
    switch (dir) {
      case 0: {
        return "↗︎";
      }
      case 1: {
        return "→";
      }
      case 2: {
        return "↘";
      }
      case 3: {
        return "↓";
      }
      case 4: {
        return "↙";
      }
      case 5: {
        return "←";
      }
      case 6: {
        return "↖";
      }
      case 7: {
        return "↑";
      }
      default: {
        return "-";
      }
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.now_left}>
        <Typography className={styles.now} variant="body1">
          {timeData.toLocaleDateString()} 現在時刻
        </Typography>
        <Typography variant="h5">
          {input.trim().length === 0 ? "現在地" : input}
        </Typography>
        <div className={styles.main_data}>
          <img
            src={`${process.env.REACT_APP_OW_ICON_URL}/${current.weather[0].icon}.png`}
            alt={current.weather[0].description}
          />
          <Typography variant="h4">{Math.floor(current.main.temp)}℃</Typography>
        </div>
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
            風: {current.wind.speed}m/s 風向: {direction(current.wind.deg)}
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
        <LoadScript googleMapsApiKey={googleApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
          ></GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default NowWeather;
