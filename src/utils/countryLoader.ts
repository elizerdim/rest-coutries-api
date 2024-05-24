import {
  LoaderFunctionArgs,
} from "react-router-dom";
import Country from "../interfaces/Country";

const countryLoader = (countries: Country[], {params}: LoaderFunctionArgs): Country => {
  const country = countries.find(
    (c) => c.name.common.toLowerCase().split(" ").join("-") === params.id
  )!;
  return country;
}

export default countryLoader