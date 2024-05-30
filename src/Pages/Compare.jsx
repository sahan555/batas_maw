import React, { useState } from "react";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import CompareSearch from "../Component/Vehicles/Compare/CompareSearch";
import { vehicleDetails } from "../Global/Datas/VehicleData";
import SimilarVehicles from "../Component/Vehicles/Details/SimilarVehicles";
import CompareDetailsNTabs from "../Component/Vehicles/Compare/CompareDetailsNTabs";

const Compare = () => {
  const [compareWith, setCompareWith] = useState("");
  return (
    <>
      <Breadcrumbs />
      <main className="compare-section">
        <CompareSearch
          data={vehicleDetails}
          slug={vehicleDetails[0]}
          compare={setCompareWith}
        />
        <CompareDetailsNTabs compareWith={compareWith} compareTo={vehicleDetails[0]} />
        <SimilarVehicles />
      </main>
    </>
  );
};

export default Compare;
