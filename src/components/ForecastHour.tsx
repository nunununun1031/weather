import React from "react";
import styles from "./ForecastHour.module.scss";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { Typography } from "@material-ui/core";

type PROPS = {
  data: any;
};

const ForecastHour: React.FC<PROPS> = ({ data }) => {
  const setTime = (t: any) => {
    let timeData = new Date(t * 1000);
    return timeData.getUTCHours() + 9;
  };

  const temp = [
    {
      name: setTime(data.hourly[0].dt),
      temperature: Math.floor(data.hourly[0].temp),
    },
    {
      name: setTime(data.hourly[1].dt),
      temperature: Math.floor(data.hourly[1].temp),
    },
    {
      name: setTime(data.hourly[2].dt),
      temperature: Math.floor(data.hourly[2].temp),
    },
    {
      name: setTime(data.hourly[3].dt),
      temperature: Math.floor(data.hourly[3].temp),
    },
    {
      name: setTime(data.hourly[4].dt),
      temperature: Math.floor(data.hourly[4].temp),
    },
    {
      name: setTime(data.hourly[5].dt),
      temperature: Math.floor(data.hourly[5].temp),
    },
    {
      name: setTime(data.hourly[6].dt),
      temperature: Math.floor(data.hourly[6].temp),
    },
    {
      name: setTime(data.hourly[7].dt),
      temperature: Math.floor(data.hourly[7].temp),
    },
  ];

  return (
    <div className={styles.root}>
      <Typography className={styles.title} variant="h5">
        １時間ごとの予測
      </Typography>
      <LineChart width={600} height={300} data={temp}>
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" unit="時" />
        <YAxis domain={[0, 40]} ticks={[0, 10, 20, 30, 40]} unit="℃" />
        <Tooltip />
        <Bar dataKey="temperature" fill="8884d8" barSize={30} />
      </LineChart>
    </div>
  );
};

export default ForecastHour;
