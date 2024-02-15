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

  const updateWeather = (weather) => {
    name.innerHTML = weather.location;
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
      // todo => build forecast ui for each day returned in forecast

      console.log(day.date);

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
      // hi span
      // lo span
      // change of rain
    });
  };

  return { updateWeather, updateForecast };
})();

export default view;
