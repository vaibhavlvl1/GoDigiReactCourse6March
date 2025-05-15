import React from "react";

function MyWeather({ cityWeather }) {
  return cityWeather ? (
    <>
      <h2>{cityWeather.name}</h2>
      <hr />
      <span className="temperature">
        <p>Min Temp : {cityWeather.main.temp_min}</p>
        <p>Max Temp : {cityWeather.main.temp_max}</p>
      </span>
      <span className="clouds">
        <h3>Weather</h3>
        <p>{cityWeather.weather[0].main}</p>
        <p>{cityWeather.weather[0].description}</p>
      </span>
    </>
  ) : (
    "Enter a city"
  );
}

export default MyWeather;
