import { ProjectsCatContext } from "../context/ProjectsCatContext";
import { useContext } from "react";

export const useProjectsCatContext = () => {
  const context = useContext(ProjectsCatContext);

  if (!context) {
    throw Error(
      "useProjectsCatContext must be used inside a ProjectsCatContextProvider"
    );
  }
  return context;
};
