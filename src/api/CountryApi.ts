import { Country } from "../types/Country";
import { countryReq } from "./countrytReq";
import { api } from "./GraphQL";

export const countryAPI = {
  getCountryByCodePays: async (code: string): Promise<Country> => {
    const { data } = await api.mutate({
      mutation: countryReq.getByCodePays,
      variables: {
        code,
      },
    });
    return data.country;
  },
};
