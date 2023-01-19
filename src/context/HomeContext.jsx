import { createContext, useReducer } from "react";

export const HomeContext = createContext();

export const homeContextReducer = (state, action) => {
  switch (action.type) {
    case "SET_HOMEDATA":
      return {
        homeDatas: action.payload,
      };
    case "CREATE_HOMEDATA":
      return {
        homeDatas: [action.payload, ...state.homeDatas],
      };
    case "DELETE_HOMEDATA":
      return {
        homeDatas: state.homeDatas.filter(
          (data) => data._id !== action.payload._id
        ),
      };
    case "UPDATE_HOMEDATA":
      return {
        homeDatas: state.homeDatas.map((data) =>
          data._id === action.payload._id ? action.payload : data
        ),
      };
    default:
      return state;
  }
};

export const HomeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(homeContextReducer, {
    homeDatas: {},
  });

  return (
    <HomeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </HomeContext.Provider>
  );
};
