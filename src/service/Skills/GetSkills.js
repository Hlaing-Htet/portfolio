import { useState, useEffect } from "react";
import { useSkillsContext } from "../../hooks/UseSkillsContext";

export const GetSkills = () => {
  const { skills, dispatch } = useSkillsContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_DB_URL}/api/skills`,
        {
          headers: {
            "Content-Type": "appliaction/json",
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setLoading(false);
        dispatch({ type: "SET_SKILLS", payload: json.result });
      }
    };
    fetchSkills();
  }, [dispatch]);
  return { skills, loading };
};
