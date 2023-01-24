import { createContext, useReducer } from "react";

export const SkillsContext = createContext();

export const skillsReducer = (state, action) => {
  switch (action.type) {
    case "SET_SKILLS":
      return {
        skills: action.payload,
      };
    case "ADD_SKILL":
      return {
        skills: [action.payload, ...state.skills],
      };
    case "DELETE_SKILL":
      return {
        skills: state.skills.filter(
          (skill) => skill._id !== action.payload._id
        ),
      };
    case "UPDATE_SKILL":
      return {
        skills: state.skills.map((skill) =>
          skill._id === action.payload._id ? action.payload : skill
        ),
      };
    default:
      return state;
  }
};

export const SkillsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(skillsReducer, {
    skills: [],
  });
  return (
    <SkillsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SkillsContext.Provider>
  );
};
