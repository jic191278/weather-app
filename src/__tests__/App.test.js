import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
  test('Render page correctly', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('App header displays correctly', () => {
    render(<App />);

    const h1Element = screen.getByText(/weather app/i);
    expect(h1Element).toBeInTheDocument();
  });
});
