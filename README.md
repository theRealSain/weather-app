# Weather App

A simple weather app built with React and Vite that fetches real-time weather data using the OpenWeatherMap API.

---

## Features
- **Search Weather**: Find the current weather of any city.
- **Real-time Data**: Displays temperature, weather conditions, humidity, and wind speed.
- **Error Handling**: Alerts for invalid inputs or cities not found.
- **Responsive Design**: User-friendly layout for all devices.

---

## Technologies Used
- **React**: For building UI components.
- **Vite**: A fast and lightweight build tool.
- **OpenWeatherMap API**: For real-time weather data.
- **CSS**: For styling the application.

---

## Prerequisites
Ensure the following are installed on your system:
- **Node.js** (v14 or later)
- **npm** (v6 or later)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Get your API key from [OpenWeatherMap](https://openweathermap.org/).

4. Create a `.env` file in the root directory and add your API key:
   ```env
   VITE_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

---

## Usage

1. Enter the name of the city in the search bar.
2. Click on the "Search" button.
3. View the weather information including:
   - Temperature
   - Weather condition
   - Humidity
   - Wind speed
4. Clear the search to check another city.

---

## File Structure

```
src/
├── components/
│   ├── WeatherApp.jsx      # Main app logic
│   └── WeatherCard.jsx     # Weather data display
├── App.jsx                 # Root app component
├── main.jsx                # Entry point
├── styles.css              # App styles
```

---

## Future Enhancements
- **5-Day Forecast**: Add future weather predictions.
- **Current Location**: Use Geolocation API for automatic weather display.
- **Dark Mode**: Add a toggle for light/dark themes.
- **Enhanced Styling**: Use libraries like Material-UI or Tailwind CSS.

---

## Contributing
Contributions are welcome! Feel free to:
- Open an issue
- Fork the repository and submit a pull request

## Live Project
This project is live at:
- [Weather App](https://therealsain.github.io/weather-app/)
---

### Acknowledgments
- [OpenWeatherMap](https://openweathermap.org/) for the API.
- [Vite](https://vitejs.dev/) for the development environment.
- [React](https://reactjs.org/) for the framework.
```
