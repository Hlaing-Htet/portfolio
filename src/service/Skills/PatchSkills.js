import { useSkillsContext } from "../../hooks/UseSkillsContext";
export const PatchSkills = ({ id, data, setEdit = null }) => {
  const { dispatch } = useSkillsContext();
  // console.log(data);

  const handleEdit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/skills/${id}`,
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
      dispatch({ type: "UPDATE_SKILL", payload: json.result });
      if (setEdit) {
        setEdit(false);
      }
    }
  };
  return handleEdit;
};
