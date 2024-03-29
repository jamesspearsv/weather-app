// Style imports
import "./main.css";

// Module imports
import api from "./components/api";
import view from "./components/view";

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("query");
  searchForm.oninput = async (event) => {
    const query = event.target.value;
    if (query === "") return;
    const results = await api.getSuggestions(query);
    view.updateResults(results);
  };

  const searchButton = document.getElementById("search-form");
  searchButton.onsubmit = async (event) => {
    event.preventDefault();
    const query = event.target.elements["query"].value;

    // wait for async function to resolve and store response data
    try {
      // Call api and await both calls to resolve
      const data = await Promise.all([
        api.getWeather(query),
        api.getForecast(query),
      ]);

      // Destructure data more semantic naming
      const [weather, forecast] = data;

      view.updateWeather(weather);
      view.updateForecast(forecast);
      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const refreshButton = document.getElementById("refresh");
  refreshButton.onclick = async () => {
    const name = document.getElementById("name").getAttribute("data-location");
    const region = document.getElementById("name").getAttribute("data-region");

    const query = name + ", " + region;
    const weather = await api.getWeather(query);
    view.updateWeather(weather);
  };
});
