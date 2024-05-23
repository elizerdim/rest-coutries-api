import { useContext } from "react";
import { ColorModeContext } from "../context/ColorModeContext";

export default function Header() {
  const { darkMode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <header data-theme={darkMode ? "dark" : ""}>
      <h1>Where in the world?</h1>
      <button onClick={toggleColorMode}>{darkMode ? "Dark" : "Light"} Mode</button>
    </header>
  );
}
