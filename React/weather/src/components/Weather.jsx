import React, { useEffect, useState } from "react";
import axios from "axios";
import MyWeather from "./MyWeather";

function Weather() {
  const [city, setCity] = useState();

  const URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "b434a93a4e0d83b6ef0bbbc46641e8a8";
  const [isLoading, setIsLoading] = useState(false);
  const [cityWeather, setCityWeather] = useState();

  async function getWeatherData(e) {
    e.preventDefault();
    try {
      const response = await axios.get(`${URL}q=${city}&appid=${API_KEY}`);

      if (response.status == 200) {
        setCityWeather(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
    }
  }

  return (
    <>
      <form onSubmit={(e) => getWeatherData(e)}>
        <input onChange={(e) => setCity(e.target.value)} type="text" />
        <button>Show Weather</button>
      </form>
      <div className="weather">
        <MyWeather cityWeather={cityWeather} />
      </div>
    </>
  );
}

export default Weather;
