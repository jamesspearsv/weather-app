// Style imports
import "./main.css";

// Module imports
import api from "./components/api";
import view from "./components/view";

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-form");
  searchButton.onsubmit = async (event) => {
    event.preventDefault();
    const query = event.target.elements["query"].value;

    // wait for async function to resolve and store response data
    try {
      const weather = await api.getWeather(query);
      console.log(weather);
      console.log("Location: " + weather.location);
      console.log("Temperature: " + weather.tempf + "F");
      console.log("Feels Like: " + weather.feelslikef + "F");
      console.log(weather.conditions.icon);

      view.updateWeather(weather);
      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
});
