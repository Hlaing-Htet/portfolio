import { useState, useEffect } from "react";
import { useProjectsContext } from "../../hooks/UseProjectsContext";

export const GetProjects = () => {
  const { projects, dispatch } = useProjectsContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_DB_URL}/api/projects`,
        {
          headers: {
            "Content-Type": "appliaction/json",
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setLoading(false);
        dispatch({ type: "SET_PROJECTS", payload: json.result });
      }
    };
    fetchProjects();
  }, [dispatch]);
  return { projects, loading };
};
