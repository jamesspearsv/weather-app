const view = (() => {
  // constants
  const currentWeather = document.getElementById("current-weather");
  const name = document.getElementById("name");
  const region = document.getElementById("region");
  const currentConditions = document.getElementById("current-conditions");
  const conditionsIcon = document.getElementById("conditions-icon");
  const temp = document.getElementById("temp");
  const feelLike = document.getElementById("feels-like");
  const wind = document.getElementById("wind");
  const humidity = document.getElementById("humidity");
  const vis = document.getElementById("vis");
  const forecastDiv = document.getElementById("forecast");

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
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    forecast.forEach((day) => {
      // todo => build forecast ui for each day returned in forecast
      const dayDiv = document.createElement("div");
      dayDiv.classList.add("day");
      forecastDiv.appendChild(dayDiv);

      const dateDiv = document.createElement("div");
      dateDiv.classList.add("day-date");
      forecastDiv.appendChild(dateDiv);

      const dayOfTheWeek = document.createElement("span");
      dayOfTheWeek.innerHTML = week[new Date(day.date).getDay];
      const dateContent = document.createElement("span");
      dateContent.innerHTML = day.date;
      dateDiv.appendChild(dayOfTheWeek);
      dateDiv.appendChild(dateContent);
    });
  };

  return { updateWeather, updateForecast };
})();

export default view;
