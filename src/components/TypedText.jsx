import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypedText({ text }) {
  const themeColor = "#c9a227";

  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: text,
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <span
      className=" font-name text-5xl"
      style={{
        color: themeColor,
      }}
      ref={el}
    ></span>
  );
}
