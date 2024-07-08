import React, { useMemo, useRef, useState } from "react";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import Map from "../../Component/Global/Map";
import BranchForm from "../../Component/About/Branches/BranchForm";
import BranchTabs from "../../Component/About/Branches/BranchTabs";
import { useLayoutData } from "../../Global/Context/Layout";
import useGet from "../../Global/Apis/useGet";
import MetaHelmet from "../../Component/Global/MetaHelmet";
const Branches = () => {
  const { data: servicesData } = useGet("provinces-services");
  const mapRef = useRef(null);
  const { coordinate, setCoordinate,settings } = useLayoutData();
  const [selectedLocation, setSelectedLocation] = useState({
    province: "",
    districtList: [],
    district: "",
    cityList: [],
    city: "",
  });
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
  const provincesWithServices = useMemo(
    () => filterProvincesWithServices(servicesData),
    [servicesData],
  );

  return (
    <>
          <MetaHelmet title={`Branches | ${settings?.meta_title !== undefined? settings?.meta_title :'Batas Maw'}`} />

      <Breadcrumbs />
      <section className="branches-page">
        <div className="branches-banner">
          <figure className="h-[400px] md:h-[500px]">
            <img
              src="/assets/images/hero/1.png"
              className="h-full object-cover object-center"
              alt="Batas"
            />
          </figure>
        </div>
        <div className="branches-wrapper section-break">
          <div className="branch-form pb-8">
            <div className="side-padding">
              <div className="container mx-auto">
                <div className="heading-wrapper mb-7 text-center">
                  <h4 className="heading">Covering Expanse: Our Network</h4>
                </div>
                <BranchForm
                  selectedLocation={selectedLocation}
                  setSelectedLocation={setSelectedLocation}
                  coordinate={coordinate}
                  mapData={provincesWithServices}
                />
              </div>
            </div>
          </div>
          <div className="branch-map" ref={mapRef}>
            <Map
              city={selectedLocation.city}
              coordinate={coordinate}
              mapData={provincesWithServices}
            />
          </div>
          <BranchTabs
            setCoordinate={setCoordinate}
            ref={mapRef}
            mapData={servicesData}
          />
        </div>
      </section>
    </>
  );
};

export default Branches;
