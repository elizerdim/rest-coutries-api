import { Link, useLoaderData } from "react-router-dom";
import Country from "../interfaces/Country";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { kebabCase } from "lodash";

type DetailPageProps = {
  countries: Country[];
};

export default function DetailPage({ countries }: DetailPageProps) {
  const country: Country = useLoaderData() as Country;

  const languagesKeys = Object.keys(country.languages || {});
  const langauges = Object.values(country.languages || {}).reverse();

  const nativeName =
    country.name.nativeName?.[languagesKeys[languagesKeys.length - 1]]?.common;

  const currenciesKeys = Object.keys(country.currencies || {});
  const currencies = currenciesKeys.map((c) => country.currencies?.[c]?.name);

  const borders = country?.borders;
  const borderCountries = countries.filter((c) => borders?.includes(c.cca3));

  return (
    <main className="container text-clr fw-300">
      <div className="country-details-container">
        <Link to="/" className="back-btn bg-accent fs-14-16 text-clr">
          <FontAwesomeIcon className="back-btn-icon" icon={faArrowLeftLong} />
          Back
        </Link>
        <div className="country-details-grid">
          <img
            className="country-details__flag"
            src={country.flags.png}
            alt={country.flags.alt}
          />
          <div className="country-details__right-col">
            <h2 className="country-details__title fw-800 fs-22-32">
              {country.name.common}
            </h2>
            <div className="country-details__info-flex">
              <div className="country-details__info-col">
                <p className="country-details__info fs-14-16">
                  <span className="fw-600">Native Name: </span>
                  {nativeName || <span className="italic">None</span>}
                </p>
                <p className="country-details__info fs-14-16">
                  <span className="fw-600">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p className="country-details__info fs-14-16">
                  <span className="fw-600">Region: </span>
                  {country.region}
                </p>
                <p className="country-details__info fs-14-16">
                  <span className="fw-600">Sub Region: </span>
                  {country?.subregion || <span className="italic">None</span>}
                </p>
                <p className="country-details__info fs-14-16">
                  <span className="fw-600">Capital: </span>
                  {country.capital?.[0] || <span className="italic">None</span>}
                </p>
              </div>
              <div className="country-details__info-col fs-14-16">
                <p className="country-details__info ">
                  <span className="fw-600">Top Level Domain: </span>
                  {country.tld?.[0] || <span className="italic">None</span>}
                </p>
                <p className="country-details__info ">
                  <span className="fw-600">Currencies: </span>
                  {currencies.join(", ") || (
                    <span className="italic">None</span>
                  )}
                </p>
                <p className="country-details__info ">
                  <span className="fw-600">Languages: </span>
                  {langauges.join(", ") || <span className="italic">None</span>}
                </p>
              </div>
            </div>
            <p className="country-details__borders fw-600 fs-16">
              Border Countries:{" "}
            </p>
            <div className="country-details__border-links fw-300 fs-12-14">
              {borderCountries.length > 0 ? (
                borderCountries?.map((borderCountry) => (
                  <Link
                    className="country-details__border-link bg-accent"
                    to={`/${kebabCase(borderCountry.name.common)}`}
                    key={kebabCase(borderCountry.name.official)}
                    aria-label={`Go to ${borderCountry.name.common}'s page`}
                  >
                    {borderCountry.name.common}
                  </Link>
                ))
              ) : (
                <span className="italic">None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
