import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ForecastDetails from '../components/ForecastDetails';

describe('ForecastDetails', () => {
  beforeEach(() => {
    cleanup();
  });

  const forecastProp = {
    date: 1710530097000, // Fri Mar 15 2024
    humidity: 10,
    temperature: {
      max: 15,
      min: 12,
    },
    wind: {
      direction: 'w',
      speed: 25,
    },
  };

  describe('ForecastDetails Snapshot', () => {
    const { asFragment } = render(<ForecastDetails forecast={forecastProp} />);

    expect(asFragment()).toMatchSnapshot();
  });

  describe('Component elements render', () => {
    beforeEach(() => {
      render(<ForecastDetails forecast={forecastProp} />);
    });

    test('Correct date renders', () => {
      const dateListItem = screen.getByText('Fri Mar 15 2024');

      expect(dateListItem).toBeInTheDocument();
    });

    test('Max temperature renders', () => {
      const maxTempListItem = screen.getByText(/15°c/i);

      expect(maxTempListItem).toBeInTheDocument();
    });

    test('Min temperature renders', () => {
      const minTempListItem = screen.getByText(/12°c/i);

      expect(minTempListItem).toBeInTheDocument();
    });

    test('Humidity renders', () => {
      const humidityTempListItem = screen.getByText(/10%/i);

      expect(humidityTempListItem).toBeInTheDocument();
    });

    test('Wind speed renders', () => {
      const windSpeedTempListItem = screen.getByText(/25mph/i);

      expect(windSpeedTempListItem).toBeInTheDocument();
    });

    test('Wind direction renders', () => {
      const windDirectionListItem = screen.getByTestId('wind-direction');

      expect(windDirectionListItem).toBeInTheDocument();
    });
  });
});
