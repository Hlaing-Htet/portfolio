import { useSocialsContext } from "../../hooks/UseSocialsContext";

export const DeleteSocial = ({ id }) => {
  const { dispatch } = useSocialsContext();

  const handleClick = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/socials/${id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_SOCIAL", payload: json.result });
    }
  };
  return handleClick;
};
