import { useState, useEffect } from "react";
//hooks
import { useHomeContext } from "../../hooks/UseHomeContext";

export const GetHomeData = () => {
  const { homeDatas, dispatch } = useHomeContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchHomeDatas = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_DB_URL}/api/homepage`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setLoading(false);

        if (json.result.length > 0) {
          localStorage.setItem("color", JSON.stringify(json?.result[0]?.color));
        }
        dispatch({ type: "SET_HOMEDATA", payload: json.result });
      }
    };
    fetchHomeDatas();
  }, [dispatch]);
  return { homeDatas, loading };
};
