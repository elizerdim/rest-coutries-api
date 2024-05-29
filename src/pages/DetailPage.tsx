import { Link, useLoaderData } from "react-router-dom";
import Country from "../interfaces/Country";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

type DetailPageProps = {
  countries: Country[];
};

export default function DetailPage({ countries }: DetailPageProps) {
  const country: Country = useLoaderData() as Country;

  const languagesKeys = Object.keys(country.languages || {});
  const langauges = Object.values(country.languages || {}).reverse();

  const nativeName =
    country.name.nativeName?.[languagesKeys[languagesKeys.length - 1]].common;

  const currenciesKeys = Object.keys(country.currencies || {});
  const currencies = currenciesKeys.map((c) => country.currencies?.[c].name);

  const borders = country?.borders;
  const borderCountries = countries.filter((c) => borders?.includes(c.cca3));

  return (
    <main>
      <div className="container">
        <button className="back-btn bg-accent fs-14-16 text-clr">
          <FontAwesomeIcon className="back-btn-icon" icon={faArrowLeftLong} />
          Back
        </button>
        <img src={country.flags.png} alt={country.flags.alt} />
        <h2>{country.name.common}</h2>
        <p className="country-detail fs-14-16">
          <span className="fw-600">Native Name: </span>
          {nativeName || <span className="italic">None</span>}
        </p>
        <p className="country-detail fs-14-16">
          <span className="fw-600">Population: </span>
          {country.population.toLocaleString()}
        </p>
        <p className="country-detail fs-14-16">
          <span className="fw-600">Region: </span>
          {country.region}
        </p>
        <p className="country-detail fs-14-16">
          <span className="fw-600">Sub Region: </span>
          {country?.subregion || <span className="italic">None</span>}
        </p>
        <p className="country-detail fs-14-16">
          <span className="fw-600">Capital: </span>
          {country.capital?.[0] || <span className="italic">None</span>}
        </p>
        <p className="country-detail fs-14-16">
          <span className="fw-600">Top Level Domain: </span>
          {country.tld?.[0] || <span className="italic">None</span>}
        </p>
        <p className="country-detail fs-14-16">
          <span className="fw-600">Currencies: </span>
          {currencies.join(", ") || <span className="italic">None</span>}
        </p>
        <p className="country-detail fs-14-16">
          <span className="fw-600">Languages: </span>
          {langauges.join(", ") || <span className="italic">None</span>}
        </p>
        <p>Border Countries: </p>
        {borderCountries?.map((borderCountry) => (
          <Link
            to={`/${borderCountry.name.common
              .toLowerCase()
              .split(" ")
              .join("-")}`}
            key={borderCountry.name.official.toLowerCase().split(" ").join("-")}
            aria-label={`Go to ${borderCountry.name.common}'s page`}
          >
            {borderCountry.name.common}
          </Link>
        )) || <span className="italic">None</span>}
      </div>
    </main>
  );
}
