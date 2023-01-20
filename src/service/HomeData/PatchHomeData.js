import { useHomeContext } from "../../hooks/UseHomeContext";
export const PatchHomeData = ({ id, data, setEdit = null }) => {
  const { dispatch } = useHomeContext();
  // console.log(data);

  const handleEdit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/homepage/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(data);
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "UPDATE_HOMEDATA", payload: json });
      if (setEdit) {
        setEdit(false);
      }
    }
  };
  return handleEdit;
};
