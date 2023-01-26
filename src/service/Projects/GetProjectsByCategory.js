import { useState, useEffect } from "react";
import { useProjectsContext } from "../../hooks/UseProjectsContext";

export const GetProjectsByCategory = ({ id }) => {
  const { projects, dispatch } = useProjectsContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_DB_URL}/api/projects/${id}`,
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
  }, [dispatch, id]);
  return { projects, loading };
};
