import { useContext } from "react";
import { ColorModeContext } from "../context/ColorModeContext";

export default function Header() {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <header>
      <h1>Where in the world?</h1>
      <button onClick={toggleColorMode}>{colorMode === "light" ? "Dark" : "Light"} Mode</button>
    </header>
  );
}
