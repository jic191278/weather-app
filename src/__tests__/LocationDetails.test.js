import React from 'react';
import { render, screen } from '@testing-library/react';
import LocationDetails from '../components/LocationDetails';

describe('LocationDetails', () => {
  test('Correct location header is displayed', () => {
    const locationProp = {
      city: 'Derby',
      country: 'UK',
    };

    render(<LocationDetails location={locationProp} />);

    const headingElement = screen.getByText('Derby, UK');
    expect(headingElement).toBeInTheDocument();
  });
});
