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
      console.log(json);
      dispatch({ type: "ADD_HOMEDATA", payload: json.result });
    }
  };
  return onSubmit;
};
