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

  const updateWeather = (weather) => {
    if (!currentWeather.classList.contains("visible")) {
      currentWeather.classList.add("visible");
    }

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

  const updateForecast = (weather) => {
    // TODO
  };

  return { updateWeather, updateForecast };
})();

export default view;
