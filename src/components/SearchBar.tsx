import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SearchBarProps = {
  query: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <div>
      <label className="sr-only" htmlFor="search-countries">
        Search for a country
      </label>
      <div className="searchbar bg-accent">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchbar-icon" />
        <input
          className="searchbar-input fs-12-14 text-clr"
          type="search"
          id="search-countries"
          placeholder="Search for a country..."
          value={query}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
