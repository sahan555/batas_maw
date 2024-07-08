import React, { useMemo, useState } from "react";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import CompareSearch from "../../Component/Vehicles/Compare/CompareSearch";
import SimilarVehicles from "../../Component/Vehicles/Details/SimilarVehicles";
import CompareDetailsNTabs from "../../Component/Vehicles/Compare/CompareDetailsNTabs";
import { useParams } from "react-router-dom";
import useGetById from "../../Global/Apis/useGetById";
import useGet from "../../Global/Apis/useGet";
import Loading from "../../Component/Global/Loading";
import MetaHelmet from "../../Component/Global/MetaHelmet";
import { useLayoutData } from "../../Global/Context/Layout";

const Compare = () => {
  const { settings } = useLayoutData();
  const { slug } = useParams();
  const { data: details } = useGetById("products-single", slug);
  const cateName = useMemo(() => details?.category_name, [details]);
  const { data: cate } = useGetById("product-category", cateName);
  const [compareWith, setCompareWith] = useState("");

  return (
    <>
      <MetaHelmet title={`Compare | ${settings?.meta_title !== undefined? settings?.meta_title :'Batas Maw'}`} />
      <Breadcrumbs data={details?.name} />
      {details && cate ? (
        <main className="compare-section">
          <div className="side-padding">
            <CompareSearch
              data={cate}
              slug={details}
              compare={setCompareWith}
            />
            <CompareDetailsNTabs
              compareWith={compareWith}
              compareTo={details}
            />
            {/* Pass details.category_name to SimilarVehicles */}
            <SimilarVehicles data={cateName} />
          </div>
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Compare;
