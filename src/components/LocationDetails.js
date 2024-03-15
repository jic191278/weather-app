import React from "react";

import "../styles/location-details.css";

const LocationDetails = ({ location }) => {
  return (
    <div className="location-details">
      <h2>{`${location.city}, ${location.country}`}</h2>
    </div>
  );
};

export default LocationDetails;
