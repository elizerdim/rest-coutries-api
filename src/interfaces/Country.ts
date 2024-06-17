export default interface Country {
  name: {
    common: string;
    nativeName?: {
      [propName: string]: {
        common: string;
      };
    };
  };
  region: string;
  flags: {
    png: string;
    alt?: string;
  };
  population: number;
  capital?: string[];
  languages?: {
    [propName: string]: string;
  };
  subregion?: string;
  tld?: string[];
  currencies?: {
    [propName: string]: {
      name: string;
    };
  };
  borders?: string[];
  cca3: string;
}
