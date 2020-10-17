import React from 'react';
import './stylesheet.scss';
import GoogleMapsComponent from "../GoogleMaps/GoogleMapsContainer"

function CustomerDashboard() {
  return (
    <GoogleMapsComponent
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default CustomerDashboard;
