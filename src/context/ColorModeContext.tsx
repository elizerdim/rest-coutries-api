import { ReactNode, createContext, useEffect, useState } from "react";

type ColorModeProviderProps = {
  children: ReactNode;
};

type ColorModeContext = {
  toggleColorMode: () => void;
  darkMode: boolean;
};

export const ColorModeContext = createContext({} as ColorModeContext);

export default function ColorModeProvider({
  children,
}: ColorModeProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('data')) {
      const savedMode: boolean = JSON.parse(localStorage.getItem('data')!)
      setDarkMode(savedMode);
    }
  }, [])

  function toggleColorMode() {
    setDarkMode(!darkMode);
    localStorage.setItem('data', JSON.stringify(!darkMode));
  }

  return (
    <>
      <ColorModeContext.Provider
        value={{
          darkMode,
          toggleColorMode,
        }}
      >
        {children}
      </ColorModeContext.Provider>
    </>
  );
}
