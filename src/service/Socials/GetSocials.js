import { useEffect, useState } from "react";

//hooks
import { useSocialsContext } from "../../hooks/UseSocialsContext";

export const GetSocials = () => {
  const { socials, dispatch } = useSocialsContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSocials = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_DB_URL}/api/socials`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setLoading(false);
        dispatch({ type: "SET_SOCIALS", payload: json.result });
      }
    };

    fetchSocials();
  }, [dispatch]);

  return { socials, loading };
};
