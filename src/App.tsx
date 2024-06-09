import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import ColorModeProvider from "./context/ColorModeContext";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./interfaces/Country";

// TODO: Add loading states
export default function App() {
  const [countries, setCountries] = useState<Country[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCountries() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.error("Failed to fetch data: ", err);
      } finally {
        setLoading(false);
      }
    }
    getCountries();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage countries={countries} loading={loading} />} />
        <Route path="/:id" element={<DetailPage countries={countries} loading={loading} />}
        />
      </Route>
    )
  );

  return (
    <ColorModeProvider>
      <RouterProvider router={router} />
    </ColorModeProvider>
  );
}
