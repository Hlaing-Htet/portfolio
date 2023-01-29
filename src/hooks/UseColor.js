import { useEffect, useState } from "react";

export const UseColor = () => {
  const [color, setColor] = useState(null);
  useEffect(() => {
    const color = JSON.parse(localStorage.getItem("color"));
    setColor(color);
  }, [color]);
  return color;
};
