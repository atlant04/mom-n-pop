import React from 'react';
import './stylesheet.scss';
import GoogleMapsComponent from '../GoogleMaps';

function Landing() {
  return (
    <div className="Landing">
      Landing
      <GoogleMapsComponent
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default Landing;
