import { useSocialsContext } from "../../hooks/UseSocialsContext";

export const PostSocial = ({ data }) => {
  const { dispatch } = useSocialsContext();
  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("url_link", data.url_link);

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/socials`,
      {
        method: "POST",
        body: formData,
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "ADD_SOCIAL", payload: json.result });
    }
  };
  return onSubmit;
};
