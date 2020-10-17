import React, { Component } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import './stylesheet.scss';
import mapStyles from './mapStyles.json';


export class GoogleMaps extends Component {
  render() {
    return (
      <Map
        className="GoogleMaps"
        google={this.props.google}
        style={{
          width: '100%',
          height: '100%',
        }}
        mapTypeControl={false}
        zoomControl={false}
        fullscreenControl={false}
        streetViewControl={false}
        zoom={15}
        initialCenter={
          {
            //33.7490° N, 84.3880° W
            lat: 33.7490,
            lng: -84.3880,
          }
        }
        onReady={(mapProps, map) => map.setOptions({ styles: mapStyles })}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBvExO6zn5_WdZxEC5rDvaP7aV7vYSKIs4',
})(GoogleMaps);
