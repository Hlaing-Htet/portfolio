import { createContext, useReducer } from "react";

export const SocialsContext = createContext();

export const socialsReducer = (state, action) => {
  switch (action.type) {
    case "SET_SOCIALS":
      return {
        socials: action.payload,
      };
    case "ADD_SOCIAL":
      return {
        socials: [action.payload, ...state.socials],
      };
    case "DELETE_SOCIAL":
      return {
        socials: state.socials.filter(
          (social) => social._id !== action.payload._id
        ),
      };
    case "UPDATE_SOCIAL":
      return {
        socials: state.socials.map((social) =>
          social._id === action.payload._id ? action.payload : social
        ),
      };
    default:
      return state;
  }
};

export const SocialsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(socialsReducer, {
    socials: [],
  });
  return (
    <SocialsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SocialsContext.Provider>
  );
};
