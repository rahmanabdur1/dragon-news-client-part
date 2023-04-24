import React, { createContext, useState } from 'react';

// create context
export const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

// create provider
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};