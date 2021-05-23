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

const data = [
  { name: "18時", temperature: 21 },
  { name: "19時", temperature: 18 },
  { name: "20時", temperature: 22 },
  { name: "21時", temperature: 17 },
  { name: "22時", temperature: 23 },
  { name: "23時", temperature: 18 },
  { name: "0時", temperature: 15 },
  { name: "1時", temperature: 16 },
];

const ForecastHour = () => {
  return (
    <div className={styles.root}>
      <Typography className={styles.title} variant="h5">
        １時間ごとの予測
      </Typography>
      <LineChart width={600} height={300} data={data}>
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 40]} ticks={[0, 10, 20, 30, 40]} unit="℃" />
        <Tooltip />
        <Bar dataKey="temperature" fill="8884d8" barSize={30} />
      </LineChart>
    </div>
  );
};

export default ForecastHour;
