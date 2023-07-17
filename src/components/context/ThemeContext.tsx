import React, { createContext } from "react";
import { theme } from "./Theme";

type ChildrenType = {
  children: React.ReactNode,
};
export const themeContext = createContext(theme);

const ThemeContextProvider = ({children}: ChildrenType) => {
  return (
    <themeContext.Provider value={theme}>{children}</themeContext.Provider>
  );
};

export default ThemeContextProvider;
