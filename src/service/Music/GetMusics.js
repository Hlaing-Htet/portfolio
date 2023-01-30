import { useEffect, useState } from "react";

//hooks
import { useMusicContext } from "../../hooks/UseMusicContext";
export const GetMusic = () => {
  const { musics, dispatch } = useMusicContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMusic = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_DB_URL}/api/music`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setLoading(false);
        dispatch({ type: "SET_MUSIC", payload: json.result });
      }
    };

    fetchMusic();
  }, [dispatch]);

  return { musics, loading };
};
