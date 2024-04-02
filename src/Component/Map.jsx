import React, { useState } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 27.700,
  lng: 85.300,
};

function Map() {
  const [cityName, setCityName] = useState('');

  const handlePlacesChanged = (searchBox) => {
    if (!searchBox) return;

    const places = searchBox.getPlaces();
    if (!places || places.length === 0) {
      return;
    }

    const place = places[0];
    const cityComponent = place.address_components.find(component => component.types.includes('locality'));

    if (cityComponent) {
      setCityName(cityComponent.long_name);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBUpTdcwTUQw3pA08IQWvixrl7AiHGUXLo"
      libraries={['places']}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        <StandaloneSearchBox
          onLoad={handlePlacesChanged}
          onPlacesChanged={(searchBox) => handlePlacesChanged(searchBox)}
        >
          <input
            type="text"
            placeholder="Search city"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: 'absolute',
              left: '50%',
              marginLeft: '-120px',
              zIndex: '2'
            }}
          />
        </StandaloneSearchBox>
        {cityName && (
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#fff',
              padding: '5px 10px',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              zIndex: '1'
            }}
          >
            {cityName}
          </div>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
