import React, { useContext } from "react";
import { ThemeContext } from "../../App";

import "./styles.scss";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`Footer ${theme}`}>
      <p>Updated at 16/05/2023</p>
    </div>
  );
}
