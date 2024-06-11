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

export default function App() {
  const [countries, setCountries] = useState<Country[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCountries() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all", {
          mode: 'cors',
          referrerPolicy: "strict-origin-when-cross-origin",
          cache: "default",
          headers: {
            "cache-control": "public, max-age=31560000, immutable"
          }
        });
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
