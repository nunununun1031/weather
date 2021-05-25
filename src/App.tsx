import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Forecast from "./components/Forecast";
import InputArea from "./components/InputArea";
import NowWeather from "./components/NowWeather";
import { oneCall } from "./data/oneCall";
import { nowData } from "./data/nowData";

interface MapCenter {
  lat: number;
  lng: number;
}

const openWeatherApiKey = process.env.REACT_APP_OW_API_KEY;
const openWeatherURL = process.env.REACT_APP_OW_API_URL;

function App() {
  // 入力値を保持
  const [input, setInput] = useState("");

  // 緯度経度
  const [center, setCenter] = useState<MapCenter>({
    lat: 0,
    lng: 0,
  });
  // one callのデータを保持
  const [data, setData] = useState(oneCall);

  // 現在のお天気情報を保持(現在の気象データ)
  const [current, setCurrent] = useState(nowData);

  // 緯度経度の初期値を最初に取得（現在地もしくは東京）
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (error) => setCenter({ lat: 35.6895, lng: 139.6917 })
    );
  }, []);

  // openWeather one call 呼び出し
  const getWeather = async () => {
    const URL = `https://${openWeatherURL}/onecall?lat=${center.lat}&lon=${center.lng}&units=metric&lang=ja&exclude=minutely,alerts,current&appid=${openWeatherApiKey}`;
    const result = await axios.get(URL);
    setData(result.data);
  };

  // openWeather current weather 呼び出し
  const getCurrent = async () => {
    const currentURL = `https://${openWeatherURL}/weather?lat=${center.lat}&lon=${center.lng}&units=metric&lang=ja&appid=${openWeatherApiKey}`;
    const currentResult = await axios.get(currentURL);
    setCurrent(currentResult.data);
  };

  const buttonClick = () => {
    getWeather();
    getCurrent();
  };

  const button = () => {
    console.log(data);
    console.log(current);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <InputArea
          input={input}
          setInput={setInput}
          buttonClick={buttonClick}
        />
        <br />
        <NowWeather center={center} current={current} />
        <br />
        <Forecast data={data} />

        <button onClick={button}>aaaa</button>
      </div>
    </div>
  );
}

export default App;
