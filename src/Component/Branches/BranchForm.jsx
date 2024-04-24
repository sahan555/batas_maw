import React from "react";
import { MapData } from "../../Global/Datas/MapData";
const BranchForm = ({ selectedLocation, setSelectedLocation }) => {
  const mapData = MapData;

  const handleLocationSelect = (key, value) => {
    setSelectedLocation((prevState) => ({
      ...prevState,
      [key]: value,
    }));

    if (key === "province") {
      const provinceData = mapData.find((item) => item.province === value);
      if (provinceData) {
        setSelectedLocation((prevState) => ({
          ...prevState,
          districtList: provinceData.district,
          district: "",
          cityList: [],
        }));
      } else {
        setSelectedLocation((prevState) => ({
          ...prevState,
          districtList: [],
          district: "",
          cityList: [],
        }));
      }
    } else if (key === "district") {
      const selectedDistrict = selectedLocation.districtList.find(
        (item) => item.name === value,
      );
      if (selectedDistrict) {
        setSelectedLocation((prevState) => ({
          ...prevState,
          cityList: selectedDistrict.city,
          city: "",
        }));
      } else {
        setSelectedLocation((prevState) => ({
          ...prevState,
          cityList: [],
          city: "",
        }));
      }
    } else if (key === "city") {
      // Update city selection
      setSelectedLocation((prevState) => ({
        ...prevState,
        city: value,
      }));
    }
  };
  return (
    <form action="" className="max-w-[1000px] mx-auto">
      <div className="-mx-8 flex flex-row">
        <div className="form-group w-1/3 px-8">
          <select
            name="province"
            className="form-control border border-grey border-solid capitalize w-full py-2 px-2 outline-0"
            onChange={(e) => handleLocationSelect("province", e.target.value)}
            value={selectedLocation.province}
          >
            <option value="">Select Province</option>
            {mapData.map((item, index) => (
              <option value={item.province} key={index}>
                {item.province}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group w-1/3 px-5">
          <select
            name="district"
            className="form-control border border-grey border-solid capitalize w-full py-2 px-2 outline-0"
            onChange={(e) => handleLocationSelect("district", e.target.value)}
            value={selectedLocation.district}
            disabled={!selectedLocation.province}
          >
            <option value="">Select District</option>
            {selectedLocation.districtList.map((item, index) => (
              <option value={item.name} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group w-1/3 px-5">
          <select
            name="city"
            className="form-control border border-grey border-solid capitalize w-full py-2 px-2 outline-0"
            value={selectedLocation.city}
            disabled={!selectedLocation.district}
            onChange={(e) => handleLocationSelect("city", e.target.value)}
          >
            <option value="">Select City</option>
            {selectedLocation.cityList.map((item, index) => (
              <option value={item.name} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
};

export default BranchForm;
