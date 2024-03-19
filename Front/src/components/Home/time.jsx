import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WiThermometer, WiHumidity } from 'react-icons/wi';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=San Cristóbal&appid=580610d711a38c969bc3dce858d8ea84`);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weatherData) return <div className="flex justify-center items-center h-screen"><div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div></div>;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="md:flex hover:scale-105 hover:shadow-xl bg-white p-4 rounded-lg shadow-md transition-transform">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather icon" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Pronóstico del clima para {weatherData.name}</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black"><WiThermometer className="inline-block" /> Temperatura: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p className="mt-2 text-gray-500"><WiHumidity className="inline-block" /> Humedad: {weatherData.main.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;