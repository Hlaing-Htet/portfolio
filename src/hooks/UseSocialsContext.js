import { SocialsContext } from "../context/SocialsContext";
import { useContext } from "react";

export const useSocialsContext = () => {
  const context = useContext(SocialsContext);

  if (!context) {
    throw Error(
      "useSocialsContext must be used inside a SocialsContextProvider"
    );
  }
  return context;
};
