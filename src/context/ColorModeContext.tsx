import { ReactNode, createContext, useState } from "react";

type ColorModeProviderProps = {
  children: ReactNode;
};

type ColorModeContext = {
  toggleColorMode: () => void;
  colorMode: string;
};

export const ColorModeContext = createContext({} as ColorModeContext);

export default function ColorModeProvider({
  children,
}: ColorModeProviderProps) {
  const [colorMode, setColorMode] = useState("light");

  function toggleColorMode() {
    const newColorMode = colorMode === "light" ? "dark" : "light";
    setColorMode(newColorMode);
  }

  return (
    <>
      <ColorModeContext.Provider
        value={{
          colorMode,
          toggleColorMode,
        }}
      >
        {children}
      </ColorModeContext.Provider>
    </>
  );
}
