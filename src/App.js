import React from "react";
import "./App.css";
import Form from "./components/Form";
import Weather_img from "./components/img/weather_img.png";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <img className="weather_img" src={Weather_img} alt={Weather_img} />
        <Form />
      </div>
    </div>
  );
}

export default App;
