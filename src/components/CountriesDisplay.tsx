import { useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import Country from "../interfaces/Country";
import kebabCase from 'lodash/kebabCase';

type CountriesDisplayProps = {
  countries: Country[];
};

export default function CountriesDisplay({ countries }: CountriesDisplayProps) {
  const cards = useRef<HTMLElement[]>([]);
  
  useEffect(() => {
    cards.current?.forEach(card => card?.addEventListener("click", handleClick));
      
      function handleClick(e: MouseEvent) {
        const isTextSelected = window.getSelection()?.toString();

        if (!isTextSelected) {
          (e.target as HTMLElement).closest("article")!.querySelector("a")!.click();
        }
      }
      console.log(cards.current);
  }, [countries])

  return (
    <div className="display-container container">
      {countries.map((country) => (
        <article
          className="country-card bg-accent"
          key={country.cca3}
          ref={(card: HTMLElement) => cards.current.push(card)}
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
              {country.capital?.join(" / ") || <span className="italic">None</span>}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
