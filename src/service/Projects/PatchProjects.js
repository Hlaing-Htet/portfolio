import { useProjectsContext } from "../../hooks/UseProjectsContext";
export const PatchProjects = ({ id, data, setEdit = null }) => {
  const { dispatch } = useProjectsContext();
  // console.log(data);

  const handleEdit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/projects/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "UPDATE_PROJECT", payload: json.result });
      if (setEdit) {
        setEdit(false);
      }
    }
  };
  return handleEdit;
};
