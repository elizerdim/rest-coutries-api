export default interface Country {
  name: {
    common: string;
    official: string;
    [propName: string]: string | object;
  };
  region: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  population: number;
  capital?: string[];
  [propName: string]: string | boolean | number | object | undefined;
}