import {
  LoaderFunctionArgs,
} from "react-router-dom";
import Country from "../interfaces/Country";
import { kebabCase } from "lodash";

const countryLoader = async (countries: Country[], {params}: LoaderFunctionArgs) => {
  try {
    const country = await countries.find(
      (c) => kebabCase(c.name.common) === params.id
    )!;
    return country;
  } catch(err) {
    console.error("Failed to fetch data: ", err);
    return null;
  }
}

export default countryLoader