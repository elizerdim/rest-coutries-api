export default interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [propName: string]: {
        common: string;
        official: string;
      }
    };
    // TODO: Should I include this line?
    [propName: string]: string | object | undefined;
  };
  region: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  population: number;
  capital?: string[];
  languages?: {
    [propName: string]: string;
  }
  subregion?: string;
  tld?: string[];
  currencies?: {
    [propName: string]: {
      name: string;
      symbol: string;
    }
  }
  // TODO: Should I include this line?
  [propName: string]: string | boolean | number | object | undefined;
}