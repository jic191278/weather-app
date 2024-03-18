import { React, useState } from 'react';

import '../styles/app.css';

import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';

const App = ({ location, forecasts }) => {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);

  const selectedForecast = forecasts.filter(
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
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
};

export default App;
