/** @format */

import React, { createContext, useState } from "react";

export let Theme = createContext();

export const ThemeContext = ({ children }) => {
  let [theme, setTheme] = useState(false);

  return (
    <>
      <Theme.Provider value={{ theme, setTheme }}>
      {children}
      </Theme.Provider>
    </>
  );
};
