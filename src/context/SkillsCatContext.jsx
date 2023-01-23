import { createContext, useReducer } from "react";

export const SkillsCatContext = createContext();

export const skillsCatReducer = (state, action) => {
  switch (action.type) {
    case "SET_SKILLSCATS":
      return {
        skillsCats: action.payload,
      };
    case "ADD_SKILLSCAT":
      return {
        skillsCats: [action.payload, ...state.skillsCats],
      };
    case "DELETE_SKILLSCAT":
      return {
        skillsCats: state.skillsCats.filter(
          (social) => social._id !== action.payload._id
        ),
      };
    case "UPDATE_SKILLSCAT":
      return {
        skillsCats: state.skillsCats.map((skillsCat) =>
          skillsCat._id === action.payload._id ? action.payload : skillsCat
        ),
      };
    default:
      return state;
  }
};

export const SkillsCatsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(skillsCatReducer, {
    skillsCats: [],
  });
  return (
    <SkillsCatContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SkillsCatContext.Provider>
  );
};
