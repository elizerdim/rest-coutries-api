import { Link } from "react-router-dom";
import Country from "../interfaces/Country";

type CountriesDisplayProps = {
  countries: Country[];
};

export default function CountriesDisplay({ countries }: CountriesDisplayProps) {
  return (
    // TODO: move .toLowerCase().split(" ").join("-") logic to a util function file
    <div className="display-container container text-clr">
      {countries.map((country) => (
        <article
          className="country-card bg-accent"
          key={country.name.official.toLowerCase().split(" ").join("-")}
        >
          <img src={country.flags.png} alt={country.flags.alt} />
          <Link
            to={`/${country.name.common.toLowerCase().split(" ").join("-")}`}
            className="country-name block fs-18 fw-800"
          >
            {country.name.common}
          </Link>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital?.[0] || "None"}</p>
        </article>
      ))}
    </div>
  );
}
