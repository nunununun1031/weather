import React, { useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import InputArea from "./components/InputArea";
import NowWeather from "./components/NowWeather";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="wrapper">
        <InputArea />
        <br />
        {/* <NowWeather /> */}
        <br />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
