import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import { ColorModeContext } from "../context/ColorModeContext";

export default function MainLayout() {
  const { darkMode } = useContext(ColorModeContext);

  return (
  // TODO: Can I move color code logic here with the useState instead of using this data-theme all around the code?
    <div className="layout-wrapper bg-main" data-theme={darkMode ? "dark" : ""}>
      <Header />
      <Outlet />
    </div>
  );
}
