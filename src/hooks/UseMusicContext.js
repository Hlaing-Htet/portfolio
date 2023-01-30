import { MusicContext } from "../context/MusicContext";
import { useContext } from "react";

export const useMusicContext = () => {
  const context = useContext(MusicContext);

  if (!context) {
    throw Error("useMusicContext must be used inside a MusicContextProvider");
  }
  return context;
};
