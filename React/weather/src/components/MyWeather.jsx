import React, { useEffect, useRef, useState } from "react";

function MyWeather({ cityWeather, setCityWeather }) {
  const weatherCard = useRef();

  useEffect(() => {
    if (cityWeather.weather[0].main == "Clouds") {
      weatherCard.current.classList.add("cloudy");
    } else if (cityWeather.weather[0].main == "Rain") {
      weatherCard.current.classList.add("rainy");
    } else if (cityWeather.weather[0].main == "Clear") {
      weatherCard.current.classList.add("sunny");
    }
  }, []);

  return (
    <div ref={weatherCard} className="weather-card card">
      <h2>
        {cityWeather.name}
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`}
          alt=""
        />
      </h2>
      <div style={{ display: "flex" }}>
        <span className="temperature">
          <h3>Temperature</h3>
          <p>Min : {cityWeather.main.temp_min}</p>
          <p>Max : {cityWeather.main.temp_max}</p>
        </span>
        <span>
          <h3>Wind</h3>

          <div>
            <p>Gust:{cityWeather.wind.gust}</p>
            <p>Speed:{cityWeather.wind.speed}</p>
          </div>
        </span>
      </div>

      <span className="weather-description">
        <h1>Weather</h1>
        <p>{cityWeather.weather[0].main}</p>
        <p>{cityWeather.weather[0].description}</p>
      </span>
      <button
        style={{ display: "block", width: "100%" }}
        onClick={() => setCityWeather()}
      >
        Select City
      </button>
    </div>
  );
}

export default MyWeather;
