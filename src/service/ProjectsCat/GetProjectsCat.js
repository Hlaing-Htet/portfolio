import { useState, useEffect } from "react";
import { useProjectsCatContext } from "../../hooks/UseProjectsCatContext";
export const GetProjectsCat = () => {
  const { projectsCats, dispatch } = useProjectsCatContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectsCats = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_DB_URL}/api/projectsCat`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setLoading(false);
        dispatch({ type: "SET_PROJECTSCATS", payload: json.result });
      }
    };
    fetchProjectsCats();
  }, [dispatch]);
  return { projectsCats, loading };
};
