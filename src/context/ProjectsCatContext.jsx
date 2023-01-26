import { createContext, useReducer } from "react";

export const ProjectsCatContext = createContext();

export const projectsCatReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROJECTSCATS":
      return {
        projectsCats: action.payload,
      };
    case "ADD_PROJECTSCAT":
      return {
        projectsCats: [...state.projectsCats, action.payload],
      };
    case "DELETE_PROJECTSCAT":
      return {
        projectsCats: state.projectsCats.filter(
          (projectsCat) => projectsCat._id !== action.payload._id
        ),
      };
    case "UPDATE_PROJECTSCAT":
      return {
        projectsCats: state.projectsCats.map((projectsCat) =>
          projectsCat._id === action.payload._id ? action.payload : projectsCat
        ),
      };
    default:
      return state;
  }
};

export const ProjectsCatsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectsCatReducer, {
    projectsCats: [],
  });
  return (
    <ProjectsCatContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProjectsCatContext.Provider>
  );
};
