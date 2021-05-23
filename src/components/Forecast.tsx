import React from "react";
import styles from "./Forecast.module.scss";
import ForecastHour from "./ForecastHour";
import ForecastWeek from "./ForecastWeek";

const Forecast = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <ForecastHour />
        <ForecastWeek />
      </div>
    </div>
  );
};

export default Forecast;
