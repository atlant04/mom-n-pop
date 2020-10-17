import React, { useEffect, useMemo, useState } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import BezierEasing from 'bezier-easing';
import './stylesheet.scss';
import mapStyles from './mapStyles.json';
import imageMarkerPrimary from './marker-primary.png';
import imageMarkerSecondary from './marker-secondary.png';

const easing = BezierEasing(0.25, 0.1, 0.25, 1.0);
let lastInterval = null;

function GoogleMaps({ google, venues, venue, onClick }) {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(undefined);

  const primaryIcon = useMemo(() => ({
    url: imageMarkerPrimary,
    anchor: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(32, 32),
  }), []);

  const secondaryIcon = useMemo(() => ({
    url: imageMarkerSecondary,
    anchor: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(32, 32),
  }), []);

  useEffect(() => {
    if (!map) return;
    map.setOptions({ styles: mapStyles });
  }, [map]);

  useEffect(() => {
    if (!map) return;
    const mapCenter = map.getCenter();
    const center = {
      lat: mapCenter.lat(),
      lng: mapCenter.lng(),
    };
    const last = Date.now();
    clearInterval(lastInterval);
    lastInterval = setInterval(() => {
      const ratio = easing(Math.min(1, (Date.now() - last) / 300));
      setCenter({
        lat: (venue.lat - center.lat) * ratio + center.lat,
        lng: (venue.lng - center.lng) * ratio + center.lng,
      });
      if (ratio >= 1) {
        clearInterval(lastInterval);
      }
    }, 1000 / 60);
  }, [map, venue]);

  return (
    <Map
      className="GoogleMaps"
      google={google}
      style={{
        width: '100%',
        height: '100%',
      }}
      mapTypeControl={false}
      zoomControl={false}
      fullscreenControl={false}
      streetViewControl={false}
      zoom={14}
      initialCenter={venue}
      center={center}
      onReady={(mapProps, map) => setMap(map)}>
      {
        venues && venues.map((v, i) => (
          <Marker name={v.name} onClick={() => onClick(v)} key={i} position={v}
                  icon={v === venue ? primaryIcon : secondaryIcon}
          />
        ))
      }
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBvExO6zn5_WdZxEC5rDvaP7aV7vYSKIs4',
})(GoogleMaps);
