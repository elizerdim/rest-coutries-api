import Country from "../interfaces/Country"

type CountriesDisplayProps = {
  countries: Country[];
}

export default function CountriesDisplay({countries}: CountriesDisplayProps) {
  return (
    <>
      {countries.map(country => <p>{country.name.common}</p>)}
    </>
  )
}