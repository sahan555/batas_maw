import React, { useState, useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const Map = ({ city }) => {
  const [position, setPosition] = useState([28.3780464, 83.9999901]); // Default position
  const [zoom, setZoom] = useState(7);
  const [samsungStores, setSamsungStores] = useState([]);
  const [cityBoundary, setCityBoundary] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchGeocode = async () => {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
        );
    
        if (response.data && response.data.length > 0) {
          const { lat, lon, osm_type, osm_id } = response.data[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
          setZoom(13);
          fetchSamsungStores(parseFloat(lat), parseFloat(lon));
        } else {
          throw new Error("Location not found");
        }
      } catch (error) {
        console.error("Error geocoding location:", error);
      }
    };

    const fetchSamsungStores = async (lat, lon) => {
      try {
        console.log(lat)
        const response = await axios.get(
          `https://overpass-api.de/api/interpreter?data=[out:json];(node["shop"="electronics"]["name"="Samsung"](${lat - 0.1},${lon - 0.2},${lat + 0.1},${lon + 0.2}););out;`
        );
        if (response.data && response.data.elements) {
          const stores = response.data.elements.map((element) => ({
            id: element.id,
            name: element.tags.name,
            location: [element.lat, element.lon],
          }));
          setSamsungStores(stores);
        } else {
          throw new Error("Failed to fetch Samsung stores");
        }
      } catch (error) {
        console.error("Error fetching Samsung stores:", error);
      }
    };

    if (city) {
      fetchGeocode();
    }
  }, [city]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(position, zoom); // Set map position and zoom
    }
  }, [position, zoom]);

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "500px" }}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Render city boundary as GeoJSON overlay */}
      {cityBoundary && (
        <GeoJSON
          data={cityBoundary}
          style={() => ({
            color: "blue", // Border color
            weight: 2,      // Border thickness
            fillOpacity: 0  // No fill
          })}
        />
      )}

      {/* Markers for Samsung stores */}
      {samsungStores.map((store) => (
        <Marker key={store.id} position={store.location}>
          <Popup>Eicher</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
