import { React, useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/app.css';

import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';

// const App = ({ location, forecasts }) => {
const App = () => {
  const [location, setLocation] = useState({ city: '', country: '' });
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);

  const getData = () => {
    return axios
      .get('https://cmd-shift-weather-app-alt.onrender.com/forecast')
      .then((response) => {
        setSelectedDate(response.data.forecasts[0].date);
        setLocation(response.data.location);
        setForecasts(response.data.forecasts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelection = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="app">
      <h1 className="app-header">Weather App</h1>
      <LocationDetails location={location} />
      <ForecastSummaries
        forecasts={forecasts}
        handleForecastSelection={handleForecastSelection}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
