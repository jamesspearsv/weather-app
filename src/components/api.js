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

      if (!response.ok) throw `Response status ${response.status}`;

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

  const getForecast = async (query) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=no&alerts=no`
      );

      if (!response.ok) throw `Response status: ${response.status}`;

      const data = await response.json();
      const forecast = [];

      data.forecast.forecastday.forEach((day) => {
        const dailyForecast = {
          high: day.day.maxtemp_f,
          low: day.day.mintemp_f,
          humidity: day.day.avghumidity,
          chanceofrain: day.day.daily_chance_of_rain,
          condition: day.day.condition.text,
          conditionIcon: day.day.condition.icon,
        };

        forecast.push(dailyForecast);
      });

      return forecast;
    } catch (error) {
      throw Error(error);
    }
  };

  return { getWeather, getForecast };
})();

export default api;
