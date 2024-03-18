import React from 'react';

import '../styles/forecast-summaries.css';

import ForecastSummary from './ForecastSummary';

const ForecastSummaries = ({ forecasts, handleForecastSelection }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => {
        return (
          <div key={forecast.date} className="forecast-summaries__forecast">
            <ForecastSummary
              forecast={forecast}
              handleForecastSelection={handleForecastSelection}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ForecastSummaries;
