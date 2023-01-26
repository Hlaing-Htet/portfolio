import { useProjectsContext } from "../../hooks/UseProjectsContext";

export const DeleteProjects = ({ id }) => {
  const { dispatch } = useProjectsContext();

  const handleClick = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/projects/${id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_PROJECT", payload: json.result });
    }
  };
  return handleClick;
};
