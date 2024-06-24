import React, { useMemo, useState } from "react";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import CompareSearch from "../Component/Vehicles/Compare/CompareSearch";
import SimilarVehicles from "../Component/Vehicles/Details/SimilarVehicles";
import CompareDetailsNTabs from "../Component/Vehicles/Compare/CompareDetailsNTabs";
import { useParams } from "react-router-dom";
import useGetById from "../Global/Apis/useGetById";
import useGet from "../Global/Apis/useGet";
import Loading from "../Component/Global/Loading";

const Compare = () => {
  const { slug } = useParams();
  const { data: details, } = useGetById(
    "products-single",
    slug,
  );
  const { data: cate, isLoading: cateLoading } = useGet("categories");

  const similarItems = useMemo(() => {
    if (!cate || !details) return [];

    return cate.find((item) => item?.name === details?.category_name);
  }, [cate, details]);

  const [compareWith, setCompareWith] = useState("");

  if (cateLoading) {
    return <Loading />;
  }

  return (
    <>
      <Breadcrumbs />
      <main className="compare-section">
        <CompareSearch
          data={similarItems?.products}
          slug={details} 
          compare={setCompareWith}
        />
        <CompareDetailsNTabs
          compareWith={compareWith}
          compareTo={details} 
        />
        {/* Pass details.category_name to SimilarVehicles */}
        <SimilarVehicles data={details?.category_name} />
      </main>
    </>
  );
};

export default Compare;
