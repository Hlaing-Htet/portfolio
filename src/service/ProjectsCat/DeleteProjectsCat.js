import { useProjectsCatContext } from "../../hooks/UseProjectsCatContext";
export const DeleteProjectsCat = ({ id }) => {
  const { dispatch } = useProjectsCatContext();

  const handleClick = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/projectsCat/${id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_PROJECTSCAT", payload: json.result });
    }
  };
  return handleClick;
};
