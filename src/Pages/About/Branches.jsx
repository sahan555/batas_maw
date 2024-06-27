import React, { useRef, useState } from "react";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import Map from "../../Component/Global/Map";
import BranchForm from "../../Component/About/Branches/BranchForm";
import BranchTabs from "../../Component/About/Branches/BranchTabs";
import { useLayoutData } from "../../Global/Context/Layout";
import useGet from "../../Global/Apis/useGet";
const Branches = () => {
  const { data: mapData, isLoading: mapLoading } = useGet("branches");
  const { data: servicesData, isLoading: servicesLoading } =
    useGet("provinces-services");

  const mapRef = useRef(null);
  const { coordinate, setCoordinate } = useLayoutData();
  const [selectedLocation, setSelectedLocation] = useState({
    province: "",
    districtList: [],
    district: "",
    cityList: [],
    city: "",
  });
 
  // console.log(selectedLocation)
  return (
    <>
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
                  <h4 className="heading">
                    Covering Expanse: Our Branch Network
                  </h4>
                </div>
                <BranchForm
                  selectedLocation={selectedLocation}
                  setSelectedLocation={setSelectedLocation}
                  coordinate={coordinate}
                  mapData={mapData}
                />
              </div>
            </div>
          </div>
          <div className="branch-map" ref={mapRef}>
            <Map
              city={selectedLocation.city}
              coordinate={coordinate}
              mapData={mapData}
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
