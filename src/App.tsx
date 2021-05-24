import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Forecast from "./components/Forecast";
import InputArea from "./components/InputArea";
import NowWeather from "./components/NowWeather";

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

  // お天気情報を保持
  const [data, setData] = useState({});

  // 緯度経度の初期値を最初に取得（現在地もしくは東京）
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (error) => setCenter({ lat: 35.6895, lng: 139.6917 })
    );
  }, []);

  const buttonClick = () => {
    const URL = `https://${openWeatherURL}/onecall?lat=${center.lat}&lon=${center.lng}&units=metric&lang=ja&exclude=minutely&appid=${openWeatherApiKey}`;
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log(data);
      });
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
        <NowWeather center={center} />
        <br />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
