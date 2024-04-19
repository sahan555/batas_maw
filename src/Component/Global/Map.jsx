import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const Map = () => {
  const center = [51.505, -0.09];
  const zoom = 13;
  const mapRef = useRef(null);
  const [position, setPosition] = useState(center);

  const onClick = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.setView(center, zoom);
    }
  }, [center, zoom]);

  const onMove = useCallback(() => {
    if (mapRef.current) {
      setPosition(mapRef.current.getCenter());
    }
  }, []);
  return (
    <>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className="h-[500px]"
        ref={mapRef}
        whenCreated={(map) => {
            mapRef.current = map;
            mapRef.current.on("move", onMove);
          }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <button onClick={onClick}>Reset View</button>
      <p>Current position: {position.toString()}</p>
    </>
  );
};

export default Map;
