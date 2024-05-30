import {
  LoaderFunctionArgs,
} from "react-router-dom";
import Country from "../interfaces/Country";
import { kebabCase } from "lodash";

const countryLoader = (countries: Country[], {params}: LoaderFunctionArgs): Country => {
  const country = countries.find(
    (c) => kebabCase(c.name.common) === params.id
  )!;
  return country;
}

export default countryLoader