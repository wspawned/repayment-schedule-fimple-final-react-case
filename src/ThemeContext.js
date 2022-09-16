import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [background, setBackground] = useState("#f1ab48");

  return (
    <ThemeContext.Provider
      value={{
        background,
        setBackground,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};