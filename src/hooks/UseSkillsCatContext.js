import { SkillsCatContext } from "../context/SkillsCatContext";
import { useContext } from "react";

export const useSkillsCatContext = () => {
  const context = useContext(SkillsCatContext);

  if (!context) {
    throw Error(
      "useSkillsCatContext must be used inside a SkillsCatContextProvider"
    );
  }
  return context;
};
