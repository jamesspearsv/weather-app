// IIFE api module to acces Weather API
// https://www.weatherapi.com/
const api = (() => {
  const API_KEY = "45bc423c9aed4a3e993200235241002";

  const getWeather = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=New York&aqi=no`
    );
    const data = await response.json();
    console.log(data);
  };

  const getForecast = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=New York&days=3&aqi=no&alerts=no`
    );

    const data = await response.json();
    console.log(data);
  };

  return { getWeather, getForecast };
})();

export default api;
