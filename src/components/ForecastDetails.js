import React from 'react';

import '../styles/forecast-details.css';

const ForecastDetails = ({ forecast }) => {
  const { date, humidity, temperature, wind } = forecast;
  const { max, min } = temperature;
  const { direction, speed } = wind;

  // handle lack of wind direction images
  let windDirection = direction;
  if (direction.length > 2) {
    windDirection = direction.slice(0, 1);
  }

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <ul className="forecast-details__detail-items">
        <li>
          <h3 className="forecast-details__date">{formattedDate}</h3>
        </li>
        <li className="forecast-details__detail-item">
          <span className="forecast-details__detail-item--label">
            Max Temperature:
          </span>
          <span className="forecast-details__detail-item--value">{`${max}°c`}</span>
        </li>
        <li className="forecast-details__detail-item">
          <span className="forecast-details__detail-item--label">
            Min Temperature:
          </span>
          <span className="forecast-details__detail-item--value">{`${min}°c`}</span>
        </li>
        <li className="forecast-details__detail-item">
          <span className="forecast-details__detail-item--label">
            Humidity:
          </span>
          <span className="forecast-details__detail-item--value">
            {`${humidity}%`}
          </span>
        </li>

        <li className="forecast-details__detail-item">
          <div className="forecast-details__detail--wind-container">
            <span className="forecast-details__detail-item--label">Wind:</span>
            <span className="forecast-details__detail-item--value">{`${speed}mph`}</span>
            <span>
              <img
                className="forecast-details__detail-item--wind-direction"
                data-testid="wind-direction"
                src={`images/${windDirection}.png`}
                alt="wind direction icon"
              />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ForecastDetails;
