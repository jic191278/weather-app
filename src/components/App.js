import React from 'react';

import '../styles/app.css';
import forecastData from '../data/forecastData.json';

import LocationDetails from './LocationDetails';
import ForecastSummary from './ForecastSummary';

const App = () => {
  return (
    <div className="app">
      <h1>Weather App</h1>
      <LocationDetails location={forecastData.location} />
      <ForecastSummary forecast={forecastData.forecasts[0]} />
    </div>
  );
};

export default App;
