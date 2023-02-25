import React, { createContext, useState } from "react";
import "./assets/main.scss";
import About from "./components/About";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Theme from "./components/Theme";
import Braindump from "./components/Braindump";
import Skills from "./components/Skills";
import Academy from "./components/Academy";
import Footer from "./components/Footer";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("Light");

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Theme />
        <Header />
        <div className={`responsive ${theme}`}>
        <div className="content">
        <About />
        <Projects />
        <Certificates />
        <Skills />
        <Academy />
        <Braindump />
        </div>
        </div>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
