import React, { useMemo, useEffect } from "react";
import { useLayoutData } from "../../../Global/Context/Layout";

const BranchForm = ({
  selectedLocation,
  setSelectedLocation,
  coordinate,
  mapData,
}) => {
  const { setCoordinate } = useLayoutData();

  useEffect(() => {
    if (coordinate) {
      setSelectedLocation((prevState) => ({
        ...prevState,
        province: "",
        districtList: [],
        district: "",
        cityList: [],
        city: "",
      }));
    }
  }, [coordinate, setSelectedLocation]);

  const handleLocationSelect = (key, value) => {
    setSelectedLocation((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    setCoordinate("");

    if (key === "province") {
      const provinceData = mapData.find((item) => item.name === value);
      setSelectedLocation((prevState) => ({
        ...prevState,
        districtList: provinceData?.districts || [],
        district: "",
        cityList: [],
        city: "",
      }));
    } else if (key === "district") {
      const selectedDistrict = selectedLocation.districtList?.find(
        (item) => item.name === value,
      );

      if (selectedDistrict) {
        setSelectedLocation((prevState) => ({
          ...prevState,
          cityList: selectedDistrict.services || [],
          city: "",
        }));
      } else {
        setSelectedLocation((prevState) => ({
          ...prevState,
          cityList: [],
          city: "",
        }));
      }
    }
  };

  const provincesOptions = useMemo(
    () =>
      mapData.map((item, index) => (
        <option value={item.name} key={index}>
          {item.name}
        </option>
      )),
    [mapData],
  );

  const districtsOptions = useMemo(
    () =>
      selectedLocation.districtList?.map((item, index) => (
        <option value={item.name} key={index}>
          {item.name}
        </option>
      )),
    [selectedLocation.districtList],
  );

  const citiesOptions = useMemo(() => {
    const uniqueCities = new Set(
      selectedLocation.cityList?.map((item) => item?.city),
    );
    return [...uniqueCities].map((city, index) => (
      <option value={city} key={index}>
        {city}
      </option>
    ));
  }, [selectedLocation.cityList]);

  return (
    <form className="mx-auto max-w-[1000px]">
      <div className="-mx-2 flex flex-wrap gap-y-4 md:flex-nowrap lg:-mx-8">
        <div className="form-group w-full px-2 md:w-1/3 lg:px-8">
          <select
            name="province"
            className="form-control w-full border border-solid border-grey px-2 py-2 capitalize outline-0"
            onChange={(e) => handleLocationSelect("province", e.target.value)}
            value={selectedLocation.province}
            aria-label="Select Province"
          >
            <option value="">Select Province</option>
            {provincesOptions}
          </select>
        </div>
        <div className="form-group w-full px-2 md:w-1/3 lg:px-8">
          <select
            name="district"
            className="form-control w-full border border-solid border-grey px-2 py-2 capitalize outline-0"
            onChange={(e) => handleLocationSelect("district", e.target.value)}
            value={selectedLocation.district}
            disabled={!selectedLocation.province}
            aria-label="Select District"
          >
            <option value="">Select District</option>
            {districtsOptions}
          </select>
        </div>
        <div className="form-group w-full px-2 md:w-1/3 lg:px-8">
          <select
            name="city"
            className="form-control w-full border border-solid border-grey px-2 py-2 capitalize outline-0"
            value={selectedLocation.city}
            disabled={!selectedLocation.district}
            onChange={(e) => handleLocationSelect("city", e.target.value)}
            aria-label="Select City"
          >
            <option value="">Select City</option>
            {citiesOptions}
          </select>
        </div>
      </div>
    </form>
  );
};

export default BranchForm;
