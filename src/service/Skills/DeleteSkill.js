import { useSkillsContext } from "../../hooks/UseSkillsContext";

export const DeleteSkills = ({ id }) => {
  const { dispatch } = useSkillsContext();

  const handleClick = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/skills/${id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_SKILL", payload: json.result });
    }
  };
  return handleClick;
};
