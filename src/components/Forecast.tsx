import React from "react";
import styles from "./Forecast.module.scss";
import ForecastHour from "./ForecastHour";
import ForecastWeek from "./ForecastWeek";

type PROPS = {
  data: any;
};

const Forecast: React.FC<PROPS> = ({ data }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <ForecastHour data={data} />
        <ForecastWeek data={data} />
      </div>
    </div>
  );
};

export default Forecast;
