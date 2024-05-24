export default interface Country {
  name: {
    common: string;
    [propName: string]: string | object;
  };
  [propName: string]: string | boolean | number | object;
}