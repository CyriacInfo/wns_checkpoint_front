import { Continent } from "../types/Continent";
import { Country } from "../types/Country";
import { continentReq } from "./ContinentReq";
import { api } from "./GraphQL";

export const continentAPI = {
  getAll: async (): Promise<Continent[]> => {
    const { data } = await api.mutate({
      mutation: continentReq.getAll,
    });
    return data.continents;
  },
  getCountriesByContinent: async (code: string): Promise<Country[]> => {
    const { data } = await api.mutate({
      mutation: continentReq.getCountriesByContinent,
      variables: {
        code,
      },
    });
    return data.continent.countries;
  },
};
