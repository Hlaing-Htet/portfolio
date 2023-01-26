import { useState, useEffect } from "react";
import { useSkillsCatContext } from "../../hooks/UseSkillsCatContext";

export const GetSkillsCat = () => {
  const { skillsCats, dispatch } = useSkillsCatContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkillsCats = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_DB_URL}/api/skillsCat`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setLoading(false);
        dispatch({ type: "SET_SKILLSCATS", payload: json.result });
      }
    };
    fetchSkillsCats();
  }, [dispatch]);
  return { skillsCats, loading };
};
