import React, { createContext, useState, useEffect } from 'react';

// create context
export const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => { },
});

// create provider
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get the darkMode value from localStorage if available, or default to false
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    // Update the localStorage value whenever darkMode changes
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
