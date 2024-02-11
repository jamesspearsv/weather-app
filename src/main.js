// Style imports
import "./main.css";

// Module imports
import api from "./components/api";

document.addEventListener("DOMContentLoaded", () => {
  const getWeatherButton = document.getElementById("get-weather-button");
  getWeatherButton.onclick = api.getWeather;

  const getForecastButton = document.getElementById("get-forecast-button");
  getForecastButton.onclick = api.getForecast;
});
