import React from 'react';

import '../styles/app.css';
import forecastData from '../data/forecastData.json';

import LocationDetails from './LocationDetails';
import ForecastSummary from './ForecastSummary';
import ForecastDetails from './ForecastDetails';

const App = () => {
  return (
    <div className="app">
      <h1 className="app-header">Weather App</h1>
      <LocationDetails location={forecastData.location} />
      <ForecastSummary forecast={forecastData.forecasts[0]} />
      <ForecastDetails forecast={forecastData.forecasts[0]} />
    </div>
  );
};

export default App;
