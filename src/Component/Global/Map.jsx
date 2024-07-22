import React, { useState, useEffect, useRef, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import useGet from "../../Global/Apis/useGet";
import { Link } from "react-router-dom";
import useMediaQuery from "../../Global/Hooks/useMediaQuery";
const filterProvincesWithServices = (mapData) => {
  return (
    mapData
      ?.map((province) => ({
        ...province,
        districts: province.districts
          .map((district) => ({
            ...district,
            services: district.services.filter((service) => service),
          }))
          .filter((district) => district.services.length > 0),
      }))
      .filter((province) => province.districts.length > 0) || []
  );
};

const getAllBranches = (allMarker) => {
  return (
    allMarker
      ?.flatMap((province) =>
        province.districts.flatMap((district) =>
          district.services.map((service) => ({
            id: service?.id,
            lat: service?.lat,
            long: service?.lang,
            name: service?.name,
          })),
        ),
      )
      .filter((service) => service.lat && service.long && service.name) || []
  );
};

const Map = ({ city, coordinate }) => {
  const isMobileDevice = useMediaQuery("(max-width: 767px)");

  const { data: servicesData } = useGet("provinces-services");
  const [position, setPosition] = useState([28.3780464, 83.9999901]);
  const [zoom, setZoom] = useState(isMobileDevice ? "7" : "7.5");
  const mapRef = useRef(null);

  const provincesWithServices = useMemo(
    () => filterProvincesWithServices(servicesData),
    [servicesData],
  );
  const mapData = provincesWithServices;
  const branches = useMemo(() => getAllBranches(mapData), [mapData]);
  const getCitygeo = (city) => {
    return mapData.reduce((filteredService, province) => {
      province.districts.forEach((district) => {
        district.services.forEach((service) => {
          if (service.city === city) {
            filteredService.service = service;
          }
        });
      });
      return filteredService;
    }, {});
  };
  const cityGeo = getCitygeo(city);
  useEffect(() => {
    if (coordinate) {
      setPosition([parseFloat(coordinate.lat), parseFloat(coordinate.lang)]);
      setZoom(13);
    } else if (city) {
      if (cityGeo?.service) {
        setPosition([cityGeo?.service.lat, cityGeo?.service?.lang]);
        setZoom(13);
      }
    } else {
      setPosition([28.3780464, 83.9999901]);
      setZoom(isMobileDevice ? "7" : "7.5");
    }
  }, [city, coordinate, cityGeo?.service]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(position, zoom);
    }
  }, [position, zoom]);

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      className="h-full min-h-[400px] lg:min-h-[600px] xl:min-h-[800px]"
      ref={mapRef}
      attributionControl={false}
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
          <Popup
            position={[parseFloat(coordinate.lat), parseFloat(coordinate.lang)]}
          >
            <p className="!m-0">{coordinate.name}</p>
            <Link
              target="_blank"
              className="block"
              to={`https://www.google.com/maps/search/?api=1&query=${[parseFloat(coordinate.lat), parseFloat(coordinate.lang)]}`}
            >
              View
            </Link>
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
          <Popup>
            <p className="!m-0">{branch.name}</p>
            <Link
              target="_blank"
              className="block"
              to={`https://www.google.com/maps/search/?api=1&query=${[branch.lat, branch.long]}`}
            >
              View
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
