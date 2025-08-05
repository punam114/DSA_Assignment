import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function WeatherPage() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);

  const API_KEY = "https://api.openweathermap.org/data/2.5/weather"; // Replace with real key

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(res.data);
      } catch (error) {
        alert("City not found");
      }
    }

    fetchWeather();
  }, [city]);

  if (!weather) return <p>Loading...</p>;

  return (
    <div>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Humidity: {weather.main.humidity} %</p>
      <p>Condition: {weather.weather[0].description}</p>

      {/* Optional Bonus: Google Map */}
      <iframe
        width="100%"
        height="300"
        loading="lazy"
        style={{ marginTop: "20px" }}
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAP_API_KEY&q=${city}`}
      ></iframe>
    </div>
  );
}

export default WeatherPage;
