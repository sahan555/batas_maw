import React, { useState, useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

import axios from "axios";

const Map = ({ city, setCity, coordinate, setCoordinate }) => {
  const [position, setPosition] = useState([28.3780464, 83.9999901]); // Default position
  const [zoom, setZoom] = useState(7.5);
  const [samsungStores, setSamsungStores] = useState([]);
  const mapRef = useRef(null);
  useEffect(() => {
    const fetchGeocode = async () => {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${city}`,
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
        const response = await axios.get(
          `https://overpass-api.de/api/interpreter?data=[out:json];(node["shop"="electronics"]["name"="Samsung"](${lat - 0.1},${lon - 0.2},${lat + 0.1},${lon + 0.2}););out;`,
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
    if (coordinate) {
      setPosition([parseFloat(coordinate?.lat), parseFloat(coordinate?.lang)]);
      setZoom(13);
    } else if (city) {
      fetchGeocode();
    } else {
      setPosition([28.3780464, 83.9999901]);
      setZoom(7.5);
    }
  }, [city, coordinate]);

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
      className="h-full min-h-[400px] lg:min-h-[600px] xl:min-h-[800px]"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {coordinate && (
        <Marker
          position={[parseFloat(coordinate?.lat), parseFloat(coordinate?.lang)]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [0, -30],
            })
          }
        >
          <Popup position={[parseFloat(coordinate?.lat), parseFloat(coordinate?.lang)]}>{coordinate?.name}</Popup>
        </Marker>
      )}

      {/* Markers for Samsung stores */}
      {samsungStores.map((store) => (
        <Marker
          key={store.id}
          position={store.location}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [0, -30],
            })
          }
        >
          <Popup>Eicher</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
