import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  memo,
} from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import useGet from "../../Global/Apis/useGet";
import { Link } from "react-router-dom";
import useMediaQuery from "../../Global/Hooks/useMediaQuery";
import axios from "axios";
import useDebounce from "../../Global/Hooks/useDebounce";

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

const getCityGeo = (city, mapData) => {
  if (!city || !mapData) return null;

  const normalizedCity = city.toLowerCase();
  for (const province of mapData) {
    for (const district of province.districts) {
      const service = district.services.find(service => 
        service.city.toLowerCase().includes(normalizedCity)
      );
      if (service) return service;
    }
  }
  return null;
};

const Map = ({ city, coordinate, setCity }) => {
  const isMobileDevice = useMediaQuery("(max-width: 767px)");
  const { data: servicesData } = useGet("provinces-services");

  const [position, setPosition] = useState([28.3780464, 83.9999901]);
  const [zoom, setZoom] = useState(isMobileDevice ? "7" : "7.5");
  const mapRef = useRef(null);
  const source = useRef(axios.CancelToken.source());

  const provincesWithServices = useMemo(
    () => filterProvincesWithServices(servicesData),
    [servicesData],
  );

  const branches = useMemo(
    () => getAllBranches(provincesWithServices),
    [provincesWithServices],
  );

  const fetchGeocode = useCallback(async (city) => {
    try {
      if (city?.length > 2) {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${city}`,
          {
            cancelToken: source.current.token,
          },
        );

        if (response.data && response.data.length > 0) {
          const { lat, lon } = response.data[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
          setZoom(13);
        }
      } else {
        throw new Error("Location not found");
      }
    } catch (error) {
      console.error("Error geocoding location:", error);
    }
  }, []);

  const debouncedFetchGeocode = useDebounce(fetchGeocode, 1000);

  useEffect(() => {
    if (coordinate) {
      setPosition([parseFloat(coordinate.lat), parseFloat(coordinate.lang)]);
      setZoom(13);
    } else if (city) {
      const cityGeo = getCityGeo(city, provincesWithServices);
      if (cityGeo) {
        setPosition([cityGeo.lat, cityGeo.lang]);
        setZoom(13);
      } else {
        debouncedFetchGeocode(city);
      }
    } else {
      setPosition([28.3780464, 83.9999901]);
      setZoom(isMobileDevice ? 7 : 7.5);
    }
  }, [
    city,
    coordinate,
    isMobileDevice,
    provincesWithServices,
    debouncedFetchGeocode,
  ]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(position, zoom);
    }
  }, [position, zoom]);
  const CustomMarker = memo(({ position, name, link }) => (
    <Marker
      position={position}
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
        <p className="!m-0">{name}</p>
        <Link target="_blank" className="block" to={link}>
          View
        </Link>
      </Popup>
    </Marker>
  ));
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
      {branches?.map((branch) => (
        <CustomMarker
          key={branch.id}
          position={[branch.lat, branch.long]}
          name={branch.name}
          link={`https://www.google.com/maps/search/?api=1&query=${[branch.lat, branch.long]}`}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
