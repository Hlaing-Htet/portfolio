import { useMusicContext } from "../../hooks/UseMusicContext";
export const DeleteMusic = ({ id }) => {
  const { dispatch } = useMusicContext();

  const handleClick = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/music/${id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_MUSIC", payload: json.result });
    }
  };
  return handleClick;
};
