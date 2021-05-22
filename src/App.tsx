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

function App() {
  // 入力値を保持
  const [input, setInput] = useState("");

  // 緯度経度
  const [center, setCenter] = useState<MapCenter>({
    lat: 0,
    lng: 0,
  });

  // お天気情報を保持
  const [data, setData] = useState([]);

  // 緯度経度の初期値を最初に取得（現在地もしくは東京）
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        // テストコード
        setCenter({ lat: 35.6895, lng: 139.6917 }),

      // ⬇️本当のコード（weather確認のため一時コメントアウト）
      // setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude }),

      (error) => setCenter({ lat: 35.6895, lng: 139.6917 })
    );
  }, []);

  const buttonClick = () => {
    const openWeatherApiKey = process.env.REACT_APP_OW_API_KEY;

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${openWeatherApiKey}&units=metric`
      )
      .then((res) => {
        console.log(res.data);
        console.log(res.data.main);
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
