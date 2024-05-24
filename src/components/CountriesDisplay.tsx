import { Link } from "react-router-dom";
import Country from "../interfaces/Country";

type CountriesDisplayProps = {
  countries: Country[];
};

export default function CountriesDisplay({ countries }: CountriesDisplayProps) {
  return (
    <>
      {countries.map((country) => (
        <Link
          to={`/${country.name.common.toLowerCase().split(" ").join("-")}`}
          className="block"
          key={country.name.official.toLowerCase().split(" ").join("-")}
        >
          {country.name.common}
        </Link>
      ))}
    </>
  );
}
