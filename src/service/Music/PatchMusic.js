import { useMusicContext } from "../../hooks/UseMusicContext";
export const PatchMusic = ({ id, data }) => {
  const { dispatch } = useMusicContext();
  // console.log(data);

  const handleEdit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/music/${id}`,
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
      dispatch({ type: "UPDATE_MUSIC", payload: json.result });
    }
  };
  return handleEdit;
};
