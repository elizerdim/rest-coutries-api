import { Link } from "react-router-dom";
import Country from "../interfaces/Country";
import kebabCase from 'lodash/kebabCase';

type CountriesDisplayProps = {
  countries: Country[];
};

export default function CountriesDisplay({ countries }: CountriesDisplayProps) {
  return (
    // TODO: make the cards block links https://css-tricks.com/block-links-the-search-for-a-perfect-solution/
    // TODO: Add fw-300 to country-info
    // TODO: Add capital(s) to the ones that have multiple; display all with comma inbetween
    // TODO: Make "None" italic with <span className="italic">None</span>

    <div className="display-container container text-clr">
      {countries.map((country) => (
        <article
          className="country-card bg-accent"
          // TODO: Use cca3 instead of official name
          key={kebabCase(country.name.official)}
        >
          <img
            className="country-card__flag"
            src={country.flags.png}
            alt={country.flags.alt}
          />
          <Link
            to={`/${kebabCase(country.name.common)}`}
            className="country-card__name block fs-18 fw-800"
          >
            {country.name.common}
          </Link>
          <div className="country-card__info">
            <p>
              <span className="fw-600">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="fw-600">Region:</span> {country.region}
            </p>
            <p>
              <span className="fw-600">Capital:</span>{" "}
              {country.capital?.[0] || "None"}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
