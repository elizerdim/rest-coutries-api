import { useContext } from "react";
import { ColorModeContext } from "../context/ColorModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  const { darkMode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <header className="main-header" data-theme={darkMode ? "dark" : ""}>
      <div className="container">
        <h1 className="fs-14-24 fw-800">Where in the world?</h1>
        <button className="fs-12-16 fw-600" onClick={toggleColorMode}>
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} className="mode-btn-icon" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="mode-btn-icon" />
          )}
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </header>
  );
}
