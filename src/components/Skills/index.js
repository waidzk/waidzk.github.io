import React, { useContext } from "react";
import { ThemeContext } from "../../App";

import "./styles.scss";

export default function Skills() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`Skills ${theme}`}>
      <h2>Skills</h2>
      <hr />
      <div className="boxes">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}
