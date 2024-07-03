import { useContext, useState } from "react";
import { createContext } from "react";
import useGet from "../Apis/useGet";

const LayoutData = createContext();

export const Layout = ({ children }) => {
  const [city, setCity] = useState("");
  const [coordinate, setCoordinate] = useState("");
  // const [loader, setLoader] = useState(false);
  const { data: settings } = useGet("settings");
  return (
    <LayoutData.Provider value={{ city, setCity, coordinate, setCoordinate,settings }}>
      {children}
    </LayoutData.Provider>
  );
};
export const useLayoutData = () => useContext(LayoutData);
