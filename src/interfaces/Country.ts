export default interface Country {
  name: {
    common: string;
    official: string;
    [propName: string]: string | object;
  };
  region: string;
  [propName: string]: string | boolean | number | object;
}