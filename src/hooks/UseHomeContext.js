import { HomeContext } from "../context/HomeContext";
import { useContext } from "react";

export const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw Error("useHomeContext must be used inside a HomeContextProvider");
  }
  return context;
};
