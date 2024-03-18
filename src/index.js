import React from 'react';
import ReactDOM from 'react-dom/client';

import forecastData from './data/forecastData.json';
import './styles/index.css';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App location={forecastData.location} forecasts={forecastData.forecasts} />
  </React.StrictMode>
);
