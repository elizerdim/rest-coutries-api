import { useLoaderData } from "react-router-dom"
import Country from "../interfaces/Country";

export default function DetailPage() {
  const country: Country = useLoaderData() as Country;
  console.log(country);

  return (
    <div>{country.name.common}</div>
  )
}