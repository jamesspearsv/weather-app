import utilities from "./utilities";

const view = (() => {
  // constants
  const name = document.getElementById("name");
  const region = document.getElementById("region");
  const currentConditions = document.getElementById("current-conditions");
  const conditionsIcon = document.getElementById("conditions-icon");
  const temp = document.getElementById("temp");
  const feelLike = document.getElementById("feels-like");
  const wind = document.getElementById("wind");
  const humidity = document.getElementById("humidity");
  const vis = document.getElementById("vis");
  const forecastElement = document.getElementById("forecast");
  const searchInput = document.getElementById("query");
  const searchForm = document.getElementById("search-form");
  const searchSuggestions = document.getElementById("search-suggestions");

  const updateWeather = (weather) => {
    utilities.removeChildren(searchSuggestions);
    name.innerHTML = weather.location;
    name.setAttribute("data-location", weather.location);
    name.setAttribute("data-region", weather.region);
    region.innerHTML = weather.region;
    currentConditions.innerHTML = weather.conditions.text;
    conditionsIcon.src = weather.conditions.icon;
    temp.innerHTML = Math.trunc(weather.tempf) + "°F";
    feelLike.innerHTML = "Feels like " + Math.trunc(weather.feelslikef) + "°F";
    wind.innerHTML = "Wind speed: " + Math.trunc(weather.windmph) + " mph";
    humidity.innerHTML = "Humidity: " + Math.trunc(weather.humidity) + "%";
    vis.innerHTML = "Visibility: " + Math.trunc(weather.vis) + " miles";
  };

  const updateForecast = (forecast) => {
    utilities.removeChildren(forecastElement);

    forecast.forEach((day) => {
      const dayElement = document.createElement("div");
      dayElement.classList.add("day");
      forecastElement.appendChild(dayElement);

      // Build and append weekday and date
      const dateElement = document.createElement("div");
      dateElement.classList.add("day-date");
      dayElement.appendChild(dateElement);

      const weekday = document.createElement("span");
      weekday.textContent = utilities.getDay(day.date);
      dateElement.appendChild(weekday);

      const date = document.createElement("span");
      date.textContent = utilities.parseDate(day.date);
      dateElement.appendChild(date);

      // condition icon
      const icon = document.createElement("img");
      icon.classList.add("day-icon");
      icon.src = day.condition.icon;
      dayElement.appendChild(icon);

      // condition text
      const condition = document.createElement("div");
      condition.classList.add("condition");
      condition.textContent = day.condition.text;
      dayElement.appendChild(condition);

      // hilo
      const hilo = document.createElement("div");
      hilo.classList.add("hilo");
      dayElement.appendChild(hilo);
      // hi span
      const hi = document.createElement("span");
      hi.textContent = Math.trunc(day.hi) + "°F";
      hilo.appendChild(hi);
      // lo span
      const lo = document.createElement("span");
      lo.textContent = Math.trunc(day.lo) + "°F";
      hilo.appendChild(lo);

      // change of rain
      const chanceOfRain = document.createElement("div");
      chanceOfRain.classList.add("chance-of-rain");
      chanceOfRain.textContent = day.chanceofrain + "% chance of rain";
      dayElement.appendChild(chanceOfRain);
    });
  };

  const updateResults = (results) => {
    utilities.removeChildren(searchSuggestions);

    results.forEach((result) => {
      const resultElement = document.createElement("div");
      resultElement.textContent = `${result.location}, ${result.region}`;
      resultElement.setAttribute("data-url", result.url);
      resultElement.classList.add("search-result");
      resultElement.onclick = (event) => {
        searchInput.value = event.target.getAttribute("data-url");
        searchForm.requestSubmit();

        utilities.removeChildren(searchSuggestions);
      };
      searchSuggestions.appendChild(resultElement);
    });
  };

  return { updateWeather, updateForecast, updateResults };
})();

export default view;
