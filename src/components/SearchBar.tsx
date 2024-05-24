import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SearchBarProps = {
  query: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export default function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <search>
      <label htmlFor="search-countries" className="sr-only">
        Search for a country
      </label>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="search"
        id="search-countries"
        placeholder="Search for a country..."
        value={query}
        onChange={onChange}
      />
    </search>
  );
}
