import { createContext, useReducer } from "react";

export const HomeContext = createContext();

export const homeContextReducer = (state, action) => {
  switch (action.type) {
    case "SET_HOMEDATA":
      return {
        homeDatas: action.payload,
      };

    case "UPDATE_HOMEDATA":
      const data = state.homeDatas.result.map((data) =>
        data._id === action.payload.result._id
          ? { ...action.payload, result: [action.payload.result] }
          : data
      );
      return {
        homeDatas: data[0],
      };
    default:
      return state;
  }
};

export const HomeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(homeContextReducer, {
    homeDatas: [],
  });

  return (
    <HomeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </HomeContext.Provider>
  );
};
