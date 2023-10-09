import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./styles.scss";

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`About ${theme}`}>
      <p>
        I am graduated of the scholarship program IDCAMP Indosat Ooredoo 2020
        and Baparekraf Digital Talent (BDT) 2021 with the Front End Web
        Developer Class at Dicoding, one of the best learning platforms in
        Indonesia with a curriculum built with well-known industry players in
        the world. There are several class stages that need to be passed to
        become an expert, start from Basic Web Programming, create a Web
        Front-End for Beginner, Fundamental Front-End Web Development and
        Front-End Web Developer Expert. I am a person who has a strong passion
        to be able contribute in the field of Front End Web Development. My
        Goals is to be able contribute in this field, of course to change my
        life and benefit many people.
      </p>
    </div>
  );
}
