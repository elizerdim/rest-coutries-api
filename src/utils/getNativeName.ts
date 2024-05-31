import Country from "../interfaces/Country";

export default function getNativeName(country: Country, languages: string[]) {
  if (country.name.nativeName) {
    return (
      country.name.nativeName?.[languages[languages.length - 1]]?.common ||
      Object.values(country.name?.nativeName)[0].common
    );
  } else {
    return false;
  }
}
