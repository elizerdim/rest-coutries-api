import CountriesDisplay from "../components/CountriesDisplay";
import SearchBar from "../components/SearchBar";
import SelectList from "../components/SelectList";

export default function HomePage() {
  return (
    <main>
      <SearchBar />
      <SelectList />
      <CountriesDisplay />
    </main>
  );
}
