import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import data from "../../data/skills.json";
import "./styles.scss";

export default function Skills() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`Skills ${theme}`}>
      <h2>Skills</h2>
      <hr />
      <div className="boxes">
        {data.map((skill) => (
          <div className="box" key={skill.id}>
            <img src={skill.img_url} alt="" />
            <span className="skillname">{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
