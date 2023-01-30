import { createContext, useReducer } from "react";

export const MusicContext = createContext();

export const musicReducer = (state, action) => {
  switch (action.type) {
    case "SET_MUSIC":
      return {
        musics: action.payload,
      };
    case "ADD_MUSIC":
      return {
        musics: [action.payload, ...state.musics],
      };
    case "DELETE_MUSIC":
      return {
        musics: state.musics.filter(
          (music) => music._id !== action.payload._id
        ),
      };
    case "UPDATE_MUSIC":
      return {
        musics: state.musics.map((music) =>
          music._id === action.payload._id ? action.payload : music
        ),
      };
    default:
      return state;
  }
};

export const MusicContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(musicReducer, {
    musics: [],
  });
  return (
    <MusicContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MusicContext.Provider>
  );
};
