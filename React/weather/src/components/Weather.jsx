import React, { useState } from "react";
import axios from "axios";
import MyWeather from "./MyWeather";

function Weather() {
  const [isLoading, setIsLoading] = useState();
  const [city, setCity] = useState();

  const URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [cityWeather, setCityWeather] = useState();

  async function getWeatherData(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(`${URL}q=${city}&appid=${API_KEY}`);

      if (response.status == 200) {
        setCityWeather(response.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="weather-container">
      {!cityWeather ? (
        <form onSubmit={(e) => getWeatherData(e)}>
          <input
            placeholder="Enter A City Name"
            onChange={(e) => setCity(e.target.value)}
            type="text"
          />

          <button>Show Weather</button>
        </form>
      ) : !isLoading ? (
        <MyWeather cityWeather={cityWeather} setCityWeather={setCityWeather} />
      ) : (
        <p>Weather is Now Loading</p>
      )}
    </div>
  );
}

export default Weather;
