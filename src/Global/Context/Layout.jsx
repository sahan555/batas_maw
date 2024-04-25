import { useContext, useState } from "react";
import { createContext } from "react";

const LayoutData = createContext();

export const Layout = ({ children }) => {
  const [city, setCity] = useState("");
  const [coordinate, setCoordinate] = useState("");
  return (
    <LayoutData.Provider value={{ city, setCity, coordinate, setCoordinate }}>
      {children}
    </LayoutData.Provider>
  );
};
export const useLayoutData = () => useContext(LayoutData);
