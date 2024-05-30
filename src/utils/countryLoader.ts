import {
  LoaderFunctionArgs,
} from "react-router-dom";
import Country from "../interfaces/Country";
import { kebabCase } from "lodash";

// TODO: Figure out what this error is about - it says 'loader'
// Error: You defined a loader for route "0-1" but didn't return anything from your `loader` function. Please return a value or `null`.
const countryLoader = (countries: Country[], {params}: LoaderFunctionArgs): Country => {
  const country = countries.find(
    (c) => kebabCase(c.name.common) === params.id
  )!;
  return country;
}

export default countryLoader