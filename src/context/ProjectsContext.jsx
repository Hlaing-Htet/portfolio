import { createContext, useReducer } from "react";

export const ProjectsContext = createContext();

export const ProjectsReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return {
        projects: action.payload,
      };
    case "ADD_PROJECT":
      return {
        projects: [action.payload, ...state.projects],
      };
    case "DELETE_PROJECT":
      return {
        projects: state.projects.filter(
          (project) => project._id !== action.payload._id
        ),
      };
    case "UPDATE_PROJECT":
      return {
        projects: state.projects.map((project) =>
          project._id === action.payload._id ? action.payload : project
        ),
      };
    default:
      return state;
  }
};

export const ProjectsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProjectsReducer, {
    projects: [],
  });
  return (
    <ProjectsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProjectsContext.Provider>
  );
};
