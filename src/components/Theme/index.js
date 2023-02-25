import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./styles.scss";

export default function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);
  //   const [theme, setTheme] = useState("Light");

  return (
    <div className={`Theme ${theme}`}>
      <span
        className="switch-theme"
        onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-moon"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
        </svg>
      </span>
    </div>
  );
}
