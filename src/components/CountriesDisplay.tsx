import Country from "../interfaces/Country";

type CountriesDisplayProps = {
  countries: Country[];
};

export default function CountriesDisplay({ countries }: CountriesDisplayProps) {
  return (
    <>
      {countries.map((country) => (
        <p key={country.name.official.toLowerCase().split(" ").join("-")}>
          {country.name.common}
        </p>
      ))}
    </>
  );
}
