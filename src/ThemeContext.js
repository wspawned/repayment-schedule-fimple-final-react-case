import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();
export const DARK_THEME = { background: "#005991", header: "darkgrey" };
export const LIGHT_THEME = { background: "#f1ab48", header: "black" };
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
