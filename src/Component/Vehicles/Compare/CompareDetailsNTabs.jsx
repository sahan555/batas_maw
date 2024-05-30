import React, { useEffect, useState } from "react";
import CompareDetails from "./CompareDetails";
import ConTabs from "./ConTabs";

const CompareDetailsNTabs = ({ compareWith, compareTo }) => {
  const [compareAll, setCompareAll] = useState([]);
  const handleCompareUpdate = () => {
    setCompareAll((prevCompareAll) => [
      ...(Array.isArray(compareTo) ? compareTo : [compareTo]),
      compareWith,
    ]);
  };
  useEffect(handleCompareUpdate, [compareTo, compareWith]);
  return (
    <>
      <CompareDetails
        compareWith={compareWith}
        compareTo={compareTo}
        compareAll={compareAll}
      />
      <ConTabs
        compareAll={compareAll}
      />
    </>
  );
};

export default CompareDetailsNTabs;
