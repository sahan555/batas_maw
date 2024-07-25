import { useContext, useState } from "react";
import { createContext } from "react";
import useGet from "../Apis/useGet";

const LayoutData = createContext();

export const Layout = ({ children }) => {
  const [city, setCity] = useState("");
  const [coordinate, setCoordinate] = useState("");
  const { data: settings } = useGet("settings");
  const { data: popup } = useGet("schemes");
  const { data: cate, cateLoading } = useGet("categories");
  const { data: resale, resaleLoading } = useGet("resales");
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
      }}
    >
      {children}
    </LayoutData.Provider>
  );
};
export const useLayoutData = () => useContext(LayoutData);
