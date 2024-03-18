import React from 'react';

import '../styles/forecast-summary.css';
import iconData from '../data/iconData.json';

const ForecastSummary = ({ forecast, handleForecastSelection }) => {
  const { date, description, icon, temperature } = forecast;
  const { max } = temperature;

  const iconCode = `${icon.slice(0, 1)}00`;
  const displayIcon = iconData[iconCode];

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-summary">
      <p className="forcast-summary__date">{formattedDate}</p>
      <img
        className="forcast-summary__icon"
        src={displayIcon}
        data-testid="weather-icon"
        alt={`${description} icon`}
      />
      <p className="forcast-summary__temperature">{`${max}°c`}</p>
      <p className="forcast-summary__description">{description}</p>
      <button
        className="forcast-summary__button"
        onClick={handleForecastSelection(date)}
        type="submit"
      >
        More details
      </button>
    </div>
  );
};

export default ForecastSummary;
