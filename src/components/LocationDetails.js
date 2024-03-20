import React from 'react';

import '../styles/location-details.css';

const LocationDetails = ({ location, errorMessage }) => {
  return (
    <div className="location-details">
      {errorMessage || <h2>{`${location.city}, ${location.country}`}</h2>}
    </div>
  );
};

export default LocationDetails;
