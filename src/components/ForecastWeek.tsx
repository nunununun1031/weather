import { Avatar, Typography } from "@material-ui/core";
import React from "react";
import styles from "./ForecastWeek.module.scss";

type PROPS = {
  data: any;
};

const ForecastWeek: React.FC<PROPS> = ({ data }) => {
  const setDay = (t: any) => {
    let timeData = new Date(t * 1000);
    return timeData.toLocaleDateString("ja-JP").slice(5);
  };

  const days = [
    {
      day: setDay(data.daily[0].dt),
      maxTemp: data.daily[0].temp.max,
      minTemp: data.daily[0].temp.min,
      icon: data.daily[0].weather[0].icon,
    },
    {
      day: setDay(data.daily[1].dt),
      maxTemp: data.daily[1].temp.max,
      minTemp: data.daily[1].temp.min,
      icon: data.daily[1].weather[0].icon,
    },
    {
      day: setDay(data.daily[2].dt),
      maxTemp: data.daily[2].temp.max,
      minTemp: data.daily[2].temp.min,
      icon: data.daily[2].weather[0].icon,
    },
    {
      day: setDay(data.daily[3].dt),
      maxTemp: data.daily[3].temp.max,
      minTemp: data.daily[3].temp.min,
      icon: data.daily[3].weather[0].icon,
    },
    {
      day: setDay(data.daily[4].dt),
      maxTemp: data.daily[4].temp.max,
      minTemp: data.daily[4].temp.min,
      icon: data.daily[4].weather[0].icon,
    },
    {
      day: setDay(data.daily[5].dt),
      maxTemp: data.daily[5].temp.max,
      minTemp: data.daily[5].temp.min,
      icon: data.daily[5].weather[0].icon,
    },
    {
      day: setDay(data.daily[6].dt),
      maxTemp: data.daily[6].temp.max,
      minTemp: data.daily[6].temp.min,
      icon: data.daily[6].weather[0].icon,
    },
  ];
  return (
    <div className={styles.root}>
      <Typography className={styles.title} variant="h5">
        ７日間の予測
      </Typography>
      <div className={styles.days_wrapper}>
        {days.map((day) => (
          <div className={styles.day} key={day.day}>
            <Typography variant="body1">{day.day}</Typography>
            <Typography variant="body1">
              <span className={styles.red}>{Math.floor(day.maxTemp)}</span> /
              <span className={styles.blue}> {Math.floor(day.minTemp)}</span>℃
            </Typography>
            <Avatar
              src={`${process.env.REACT_APP_OW_ICON_URL}/${day.icon}.png`}
              alt="お天気情報"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastWeek;
