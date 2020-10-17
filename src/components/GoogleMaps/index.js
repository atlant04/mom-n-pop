import React, { Component } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import './stylesheet.scss';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class GoogleMaps extends Component {
  render() {
    return (
      <Map
        className="GoogleMaps"
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233,
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBvExO6zn5_WdZxEC5rDvaP7aV7vYSKIs4',
})(GoogleMaps);
