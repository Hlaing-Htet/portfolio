import { useEffect, useState } from "react";
import { useHomeContext } from "./UseHomeContext";

export const UseColor = () => {
  const { homeDatas } = useHomeContext();

  const [color, setColor] = useState(null);
  useEffect(() => {
    const color = JSON.parse(localStorage.getItem("color"));
    setColor(color);
  }, [homeDatas?.color]);
  return color;
};
