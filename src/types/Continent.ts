import { Country } from "./Country";

export type Continent = {
  code: string;
  name: String;
  countries?: [Country];
};
