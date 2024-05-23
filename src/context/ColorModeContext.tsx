import { ReactNode, createContext, useState } from "react";

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

  function toggleColorMode() {
    setDarkMode(!darkMode);
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
