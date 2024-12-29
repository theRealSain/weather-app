import React, { useState } from "react";
import WeatherCard from "./WeatherCard";

const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    const API_KEY = "3ba282d2034ba0844e8ed9c91f4843d8";

    const fetchWeather = async () => {
        if (!city) {
            setError("Please enter a city name: ");
            return;
        }
        setError("");
        
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );
        
            if (!response.ok) throw new Error("City not found!");
            const data = await response.json();
            setWeatherData(data);
            
        }
        catch (err) {
            setWeatherData(null);
            setError(err.message);
        }
    }

    return (
        <div className="weather-app">
            <h1>WEATHER APP</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={fetchWeather}>Search</button>
            </div>

            {error && <p className="error">{error}</p>}
            {weatherData && <WeatherCard data={weatherData} />}

        </div>
    );
};

export default WeatherApp;