import { useSkillsCatContext } from "../../hooks/UseSkillsCatContext";

export const DeleteSkillsCat = ({ id }) => {
  const { dispatch } = useSkillsCatContext();

  const handleClick = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/skillscat/${id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_SKILLSCAT", payload: json.result });
    }
  };
  return handleClick;
};
