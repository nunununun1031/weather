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
const googleApiKey = process.env.REACT_APP_GM_API_KEY;

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

  // geocodingAPIの取得
  async function callGeocodingAPI() {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&language=jp&region=jp&key=${googleApiKey}`;
    const response = await axios.get(url);

    setCenter({
      lat: response.data.results[0].geometry.location.lat,
      lng: response.data.results[0].geometry.location.lng,
    });
  }

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

  // 検索ボタンを押した時のイベント設定
  const buttonClick = () => {
    if (input.trim().length === 0) {
      return;
    }
    callGeocodingAPI();
  };
  // 緯度経度の初期値を最初に取得（現在地もしくは東京）
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (error) => setCenter({ lat: 35.6895, lng: 139.6917 })
    );
  }, []);
  // 座標が変わるたびにお天気情報取得
  useEffect(() => {
    getWeather();
    getCurrent();
  }, [center]);

  return (
    <div className="App">
      <div className="wrapper">
        <InputArea
          input={input}
          setInput={setInput}
          buttonClick={buttonClick}
        />
        <br />
        <NowWeather center={center} current={current} input={input} />
        <br />
        <Forecast data={data} />
      </div>
    </div>
  );
}

export default App;
