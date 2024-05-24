import { useEffect, useState } from "react";
import CountriesDisplay from "../components/CountriesDisplay";
import SearchBar from "../components/SearchBar";
import SelectList from "../components/SelectList";
import Country from "../interfaces/Country";
import RegionOption from "../types/RegionOption";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [countries, setCountries] = useState<Country[] | []>([]);
  const [selectedRegion, setSelectedRegion] = useState<RegionOption | null>(null);

  const selectedRegionCountries = selectedRegion && countries.filter(
    (country: Country) => country.region.toLowerCase() === selectedRegion.value
  );

  const filteredCountries = selectedRegionCountries
    ? selectedRegionCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : countries.filter((country: Country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );

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

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setSearchQuery(e.currentTarget.value);
  }

  return (
    <main>
      <SearchBar query={searchQuery} onChange={handleChange} />
      <SelectList onChange={setSelectedRegion} />
      <CountriesDisplay countries={filteredCountries || countries} />
    </main>
  );
}
