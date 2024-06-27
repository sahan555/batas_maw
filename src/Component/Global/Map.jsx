import React, { useState, useEffect, useRef, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const filterProvincesWithServices = (mapData) => {
  return (
    mapData
      ?.map((province) => ({
        ...province,
        districts: province.districts
          .map((district) => ({
            ...district,
            cities: district.cities.filter(
              (city) => city.branchcity && city.branchcity.length > 0
            ),
          }))
          .filter((district) => district.cities.length > 0),
      }))
      .filter((province) => province.districts.length > 0) || []
  );
};

const getAllBranches = (allMarker) => {
  return allMarker
    ?.flatMap((province) =>
      province.districts.flatMap((district) =>
        district.cities.flatMap((city) =>
          city.branchcity.map((branchCity) => ({
            id: branchCity?.id,
            lat: branchCity?.branch.lat,
            long: branchCity?.branch.long,
            name: branchCity?.branch.name,
          }))
        )
      )
    )
    .filter((branch) => branch.lat && branch.long && branch.name) || [];
};

const Map = ({ city, coordinate, mapData }) => {
  const [position, setPosition] = useState([28.3780464, 83.9999901]);
  const [zoom, setZoom] = useState(7.5);
  const mapRef = useRef(null);

  const allMarker = useMemo(() => filterProvincesWithServices(mapData), [
    mapData,
  ]);

  const branches = useMemo(() => getAllBranches(allMarker), [allMarker]);

  useEffect(() => {
    if (coordinate) {
      setPosition([parseFloat(coordinate.lat), parseFloat(coordinate.lang)]);
      setZoom(13);
    } else if (city) {
      const cityGeo = getCitygeo(city);
      console.log(cityGeo)
      if (cityGeo?.city) {
        setPosition([cityGeo.city.lat, cityGeo.city.long]);
        setZoom(13);
      }
    } else {
      setPosition([28.3780464, 83.9999901]);
      setZoom(7.5);
    }
  }, [city, coordinate]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(position, zoom);
    }
  }, [position, zoom]);

  const getCitygeo = (city) => {
    return allMarker.reduce((filteredCities, province) => {
      province.districts.forEach((district) => {
        district.cities.forEach((item) => {
          if (item.name === city) {
            filteredCities.city = item;
          }
        });
      });
      return filteredCities;
    }, {});
  };

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
          position={[parseFloat(coordinate.lat), parseFloat(coordinate.lang)]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [0, -30],
            })
          }
        >
          <Popup position={[parseFloat(coordinate.lat), parseFloat(coordinate.lang)]}>
            {coordinate.name}
          </Popup>
        </Marker>
      )}

      {/* Markers for all branches */}
      {branches.map((branch) => (
        <Marker
          key={branch.id}
          position={[branch.lat, branch.long]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [0, -30],
            })
          }
        >
          <Popup>{branch.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
