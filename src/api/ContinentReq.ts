import { gql } from "@apollo/client";

export const continentReq = {
  getAll: gql`
    query Query {
      continents {
        name
        code
      }
    }
  `,
  getCountriesByContinent: gql`
    query Query($code: ID!) {
      continent(code: $code) {
        countries {
          name
          emoji
          code
        }
      }
    }
  `,
};
