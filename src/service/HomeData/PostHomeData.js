import { useHomeContext } from "../../hooks/UseHomeContext";

export const PostHomeData = ({ data = {} }) => {
  const { dispatch } = useHomeContext();
  const onSubmit = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_DB_URL}/api/homepage`,
      {
        method: "POST",
        body: data,
      }
    );
    const json = await response.json();
    if (response.ok) {
      console.log(json.result);
      if (json.result.length > 0) {
        localStorage.setItem(
          "color",
          JSON.stringify(json?.result[0]?._doc.color)
        );
      }
      dispatch({ type: "ADD_HOMEDATA", payload: json.result[0]?._doc });
    }
  };
  return onSubmit;
};
