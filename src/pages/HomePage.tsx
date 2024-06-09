import { useState } from "react";
import CountriesDisplay from "../components/CountriesDisplay";
import SearchBar from "../components/SearchBar";
import SelectList from "../components/SelectList";
import Country from "../interfaces/Country";
import RegionOption from "../types/RegionOption";
import FormWrapper from "../components/FormWrapper";
import Spinner from "../components/Spinner";

type HomePageProps = {
  countries: Country[];
  loading: boolean;
};

export default function HomePage({ countries, loading }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<RegionOption | null>(
    null
  );

  const selectedRegionCountries =
    selectedRegion &&
    (selectedRegion.value === "all"
      ? countries
      : countries.filter(
          (country: Country) =>
            country.region.toLowerCase() === selectedRegion.value
        ));
        
  const filteredCountries = selectedRegionCountries
    ? selectedRegionCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : countries.filter((country: Country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setSearchQuery(e.currentTarget.value);
  }

  return (
    <main>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <FormWrapper>
            <SearchBar query={searchQuery} onChange={handleChange} />
            <SelectList onChange={setSelectedRegion} />
          </FormWrapper>
          <CountriesDisplay countries={filteredCountries || countries} />
        </>
      )}
    </main>
  );
}
