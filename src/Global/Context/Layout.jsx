import { useContext, useState } from "react";
import { createContext } from "react";
import useGet from "../Apis/useGet";

const LayoutData = createContext();

export const Layout = ({ children }) => {
  const [city, setCity] = useState("");
  const [coordinate, setCoordinate] = useState("");
  const [vehicleTabIndex, setVehicleTabIndex] = useState(0);
  const { data: settings } = useGet("settings");
  const { data: popup } = useGet("schemes");
  const { data: cate, isLoading: cateLoading } = useGet("categories");
  const { data: resale, isLoading: resaleLoading } = useGet("resales");

  return (
    <LayoutData.Provider
      value={{
        city,
        setCity,
        coordinate,
        setCoordinate,
        settings,
        popup,
        cate,
        cateLoading,
        resale,
        resaleLoading,
        vehicleTabIndex,
        setVehicleTabIndex,
      }}
    >
      {children}
    </LayoutData.Provider>
  );
};
export const useLayoutData = () => useContext(LayoutData);
