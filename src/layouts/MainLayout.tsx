import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import { ColorModeContext } from "../context/ColorModeContext";

export default function MainLayout() {
  const { darkMode } = useContext(ColorModeContext);

  return (
    <div className="bg-main" data-theme={darkMode ? "dark" : ""}>
      <Header />
      <Outlet />
    </div>
  );
}
