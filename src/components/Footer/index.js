import React, { useContext } from "react";
import { ThemeContext } from "../../App";

import "./styles.scss";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`Footer ${theme}`}>
      <p>Updated at 09/10/2023</p>
      <p>
        more info on { }
        <a href="https://www.linkedin.com/in/pradhityas-waidz-kamal-9641a3194/">
           my LinkedIn
        </a>
      </p>
    </div>
  );
}
