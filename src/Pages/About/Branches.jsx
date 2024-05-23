import React, { useState } from "react";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import Map from "../../Component/Global/Map";
import BranchForm from "../../Component/About/Branches/BranchForm";
import BranchTabs from "../../Component/About/Branches/BranchTabs";
import { useLayoutData } from "../../Global/Context/Layout";
const Branches = () => {
  const { coordinate, setCoordinate } = useLayoutData();
  const [selectedLocation, setSelectedLocation] = useState({
    province: "",
    districtList: [],
    district: "",
    cityList: [],
    city: "",
  });
  return (
    <>
      <Breadcrumbs />
      <section className="branches-page">
        <div className="branches-banner">
          <figure className="h-[500px]">
            <img
              src="/assets/images/hero/1.png"
              className="h-full object-cover object-center"
              alt="Batas"
            />
          </figure>
        </div>
        <div className="branches-wrapper section-break">
          <div className="branch-form pb-8">
            <div className="container mx-auto">
              <div className="heading-wrapper mb-7 text-center">
                <h4 className="heading">
                  Covering Expanse: Our Branch Network
                </h4>
              </div>
              <BranchForm
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
              />
            </div>
          </div>
          <div className="branch-map">
            <Map city={selectedLocation.city} coordinate={coordinate} />
          </div>
          <BranchTabs setCoordinate={setCoordinate} />
        </div>
      </section>
    </>
  );
};

export default Branches;
