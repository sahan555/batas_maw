import { useContext } from "react";
import { createContext } from "react";

const LayoutData = createContext();

export const Layout = ({ children }) => {
  return <LayoutData.Provider value="">{children}</LayoutData.Provider>;
};
export const useLayoutData = () => useContext(LayoutData);
