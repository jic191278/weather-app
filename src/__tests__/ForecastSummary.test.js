import React from 'react';
import { render, screen } from '@testing-library/react';
import ForecastSummary from '../components/ForecastSummary';

describe('ForecastSummary', () => {
  const forecastProp = {
    date: 1710530097000, // Fri Mar 15 2024
    description: 'Crazy Weather',
    icon: '202',
    temperature: {
      max: 5,
      min: 1,
    },
  };

  describe('ForecastSummary Snapshot', () => {
    test('Component renders correctly', () => {
      const { asFragment } = render(
        <ForecastSummary forecast={forecastProp} />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Component elements render', () => {
    beforeEach(() => {
      render(<ForecastSummary forecast={forecastProp} />);
    });

    test('Date displays correctly', () => {
      const dateParaElement = screen.getByText('Fri Mar 15 2024');
      expect(dateParaElement).toBeInTheDocument();
    });

    test('Weather icon is rendered', () => {
      const iconImgElement = screen.getByTestId('weather-icon');
      expect(iconImgElement).toHaveClass('forcast-summary__icon');
    });

    test('Max temperature is rendered', () => {
      const maxParaElement = screen.getByText('5°c');
      expect(maxParaElement).toBeInTheDocument();
    });

    test('Description is rendered', () => {
      const descParaElement = screen.getByText('Crazy Weather');
      expect(descParaElement).toBeInTheDocument();
    });

    test('More details button is rendered', () => {
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });
});
