import { Link } from "react-router-dom";
import Country from "../interfaces/Country";
import kebabCase from 'lodash/kebabCase';
import { useEffect, useState } from "react";

type CountriesDisplayProps = {
  countries: Country[];
};

export default function CountriesDisplay({ countries }: CountriesDisplayProps) {
  const [displayCountries, setDisplayCountries] = useState(countries);

  useEffect(() => {
    setDisplayCountries(countries);
  }, [countries]);

  return (
    <div className="display-container container">
      {displayCountries.map((country) => (
        <article key={country.cca3}>
          <img
            className="country-card__flag"
            src={country.flags.png}
            alt={country.flags.alt}
          />
          <Link
            to={`/${kebabCase(country.name.common)}`}
            className="country-card bg-accent"
          >
            <h2 className="country-card__name block fs-18 fw-800">
              {country.name.common}
            </h2>
          </Link>
          <div className="country-card__info fw-300">
            <p>
              <span className="fw-600">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="fw-600">Region:</span> {country.region}
            </p>
            <p>
              <span className="fw-600">Capital:</span>{" "}
              {country.capital?.join(" / ") || (
                <span className="italic">None</span>
              )}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
