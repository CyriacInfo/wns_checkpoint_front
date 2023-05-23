import { Continent } from "./Continent";
import { Language } from "./Language";

export type Country = {
  code: string;
  name: string;
  native: String;
  phone: String;
  continent: Continent;
  capital: String;
  currency: String;
  languages: [Language];
  emoji: String;
  emojiU: String;
  states: [State];
};

export type State = {
  code: String;
  name: String;
  country: Country;
};
