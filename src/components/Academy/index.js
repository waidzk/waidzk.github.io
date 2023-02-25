import React, { useContext } from "react";
import { ThemeContext } from "../../App";

import "./styles.scss";

export default function Academy() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`Academy ${theme}`}>
      <h2>Academy</h2>
      <hr />
      <div className="item">
        <h3>SMKN 2 Cikarang Barat | 2016 - 2020</h3>
        <p>Teknik Komputer dan Jaringan</p>
        <p>85.39</p>
      </div>
    </div>
  );
}
