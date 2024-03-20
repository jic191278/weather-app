import { React, useEffect, useState } from 'react';

import '../styles/app.css';

import LocationDetails from './LocationDetails';
import SearchForm from './SearchForm';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';

import getData from '../requests/getData';

const App = () => {
  const [location, setLocation] = useState({ city: '', country: '' });
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelection = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = (city) => {
    getData(setSelectedDate, setLocation, setForecasts, city, setErrorMessage);
  };

  useEffect(() => {
    getData(setSelectedDate, setLocation, setForecasts, 'Hove');
  }, []);

  return (
    <div className="app">
      <h1 className="app-header">Weather App</h1>
      <LocationDetails location={location} errorMessage={errorMessage} />
      <SearchForm handleCitySearch={handleCitySearch} />
      <ForecastSummaries
        forecasts={forecasts}
        handleForecastSelection={handleForecastSelection}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
