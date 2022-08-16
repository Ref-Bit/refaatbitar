import React, { createContext, ReactNode, useState } from 'react';

interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

type Props = {
  children?: ReactNode;
};

const defaultState = {
  dark: false,
};

const ThemeContext = createContext<IThemeContext>(defaultState);

const ThemeProvider = ({ children }: Props) => {
  const [dark, setDark] = useState<boolean>(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
