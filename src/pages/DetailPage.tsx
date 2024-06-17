import { Link, useParams } from "react-router-dom";
import Country from "../interfaces/Country";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { kebabCase } from "lodash";
import getNativeName from "../utils/getNativeName";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";

type DetailPageProps = {
  countries: Country[];
  loading: boolean;
};

type CountryDetails = {
  flagImg: string;
  flagAltText: string | null;
  commonName: string;
  nativeName: string | null;
  population: string;
  region: string;
  subregion: string | null;
  capital: string | null;
  tld: string | null;
  currencies: string | null;
  languages: string;
  borderCountries: Country[];
};

export default function DetailPage({ countries, loading }: DetailPageProps) {
  const [countryDetails, setCountryDetails] = useState<
    CountryDetails | Record<string, never>
  >({});
  const { id } = useParams();

  useEffect(() => {
    async function getCountry() {
      if (countries.length > 0) {
        try {
          const country: Country = await countries.find(
            (c) => kebabCase(c.name.common) === id
          )!;

          const languageKeys = Object.keys(country.languages || {});
          const languageValues = Object.values(
            country.languages || {}
          ).reverse();
          const currenciesKeys = Object.keys(country.currencies || {});
          const currencies = currenciesKeys.map(
            (c) => country.currencies?.[c]?.name
          );

          const countryDetails = {
            flagImg: country.flags.png,
            flagAltText: country.flags?.alt || null,
            commonName: country.name.common,
            nativeName: getNativeName(country, languageKeys),
            population: country.population.toLocaleString(),
            region: country.region,
            subregion: country?.subregion || null,
            capital: country.capital?.[0] || null,
            tld: country.tld?.[0] || null,
            currencies: currencies?.join(", ") || null,
            languages: languageValues.join(", "),
            borderCountries: countries.filter((c) =>
              country?.borders?.includes(c.cca3)
            ),
          };

          setCountryDetails(countryDetails);
        } catch (err) {
          console.error("Failed to fetch data: ", err);
        }
      }
    }
    getCountry();
  }, [countries, id]);

  return (
    <main className="container text-clr fw-300">
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="country-details-container">
          <Link to="/" className="back-btn bg-accent fs-14-16">
            <FontAwesomeIcon className="back-btn-icon" icon={faArrowLeftLong} />
            Back
          </Link>
          <div className="country-details-grid">
            <img
              className="country-details__flag"
              src={countryDetails.flagImg}
              alt={countryDetails.flagAltText || `${countryDetails.nativeName}'s flag`}
            />
            <div className="country-details__right-col">
              <h2 className="country-details__title fw-800 fs-22-32">
                {countryDetails.commonName}
              </h2>
              <div className="country-details__info-flex">
                <div className="country-details__info-col">
                  <p className="country-details__info fs-14-16">
                    <span className="fw-600">Native Name: </span>
                    {countryDetails.nativeName || (
                      <span className="italic">None</span>
                    )}
                  </p>
                  <p className="country-details__info fs-14-16">
                    <span className="fw-600">Population: </span>
                    {countryDetails.population}
                  </p>
                  <p className="country-details__info fs-14-16">
                    <span className="fw-600">Region: </span>
                    {countryDetails.region}
                  </p>
                  <p className="country-details__info fs-14-16">
                    <span className="fw-600">Sub Region: </span>
                    {countryDetails.subregion || (
                      <span className="italic">None</span>
                    )}
                  </p>
                  <p className="country-details__info fs-14-16">
                    <span className="fw-600">Capital: </span>
                    {countryDetails.capital || (
                      <span className="italic">None</span>
                    )}
                  </p>
                </div>
                <div className="country-details__info-col fs-14-16">
                  <p className="country-details__info ">
                    <span className="fw-600">Top Level Domain: </span>
                    {countryDetails.tld || <span className="italic">None</span>}
                  </p>
                  <p className="country-details__info ">
                    <span className="fw-600">Currencies: </span>
                    {countryDetails.currencies || (
                      <span className="italic">None</span>
                    )}
                  </p>
                  <p className="country-details__info ">
                    <span className="fw-600">Languages: </span>
                    {countryDetails.languages || (
                      <span className="italic">None</span>
                    )}
                  </p>
                </div>
              </div>
              <p className="country-details__borders fw-600 fs-16">
                Border Countries:{" "}
              </p>
              <div className="country-details__border-links fw-300 fs-12-14">
                {countryDetails.borderCountries?.length > 0 ? (
                  countryDetails.borderCountries.map((borderCountry) => (
                    <Link
                      className="country-details__border-link bg-accent"
                      to={`/${kebabCase(borderCountry.name.common)}`}
                      key={borderCountry.cca3}
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
      )}
    </main>
  );
}
