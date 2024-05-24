import { useEffect, useState } from "react";
import CountriesDisplay from "../components/CountriesDisplay";
import SearchBar from "../components/SearchBar";
import SelectList from "../components/SelectList";
import Country from "../interfaces/Country";

export default function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.error("Failed to fetch data: ", err);
      }
    }
    getCountries();
  }, []);

  return (
    <main>
      <SearchBar />
      <SelectList />
      <CountriesDisplay countries={countries} />
    </main>
  );
}
