import { createContext, useReducer } from "react";

export const HomeContext = createContext();

export const homeContextReducer = (state, action) => {
  switch (action.type) {
    case "SET_HOMEDATA":
      return {
        homeDatas: action.payload[0],
      };

    case "UPDATE_HOMEDATA":
      return {
        homeDatas:
          state.homeDatas._id === action.payload._id
            ? action.payload
            : state.homeDatas,
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
