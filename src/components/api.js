// IIFE api module to acces Weather API
// https://www.weatherapi.com/
const api = (() => {
  const API_KEY = "45bc423c9aed4a3e993200235241002";

  const getWeather = async (query) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=no`,
        { mode: "cors" }
      );

      if (!response.ok) {
        return Promise.reject(new Error("Response status " + response.status));
      }

      const data = await response.json();
      const weather = {
        conditions: data.current.condition, // contains text, icon, code
        feelslikef: data.current.feelslike_f,
        feelslikec: data.current.feelslike_c,
        humidity: data.current.humidity,
        location: data.location.name,
        region: data.location.region,
        tempf: data.current.temp_f,
        tempc: data.current.temp_c,
        windmph: data.current.wind_mph,
        winddir: data.current.wind_dir,
        vis: data.current.vis_miles,
      };
      return weather;
    } catch (error) {
      throw Error(error);
    }
  };

  const getForecast = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=New York&days=3&aqi=no&alerts=no`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error fetching data => " + error);
    }
  };

  return { getWeather, getForecast };
})();

export default api;
