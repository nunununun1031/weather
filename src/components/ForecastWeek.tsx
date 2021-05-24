import { Typography } from "@material-ui/core";
import React from "react";
import styles from "./ForecastWeek.module.scss";

const ForecastWeek = () => {
  const days = [
    { day: "４月１日", temperature: "0/0℃" },
    { day: "４月２日", temperature: "0/0℃" },
    { day: "４月３日", temperature: "0/0℃" },
    { day: "４月４日", temperature: "0/0℃" },
    { day: "４月５日", temperature: "0/0℃" },
    { day: "４月６日", temperature: "0/0℃" },
    { day: "４月７日", temperature: "0/0℃" },
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
            <Typography variant="body1">{day.temperature}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastWeek;
