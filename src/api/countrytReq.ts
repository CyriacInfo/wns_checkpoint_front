import { gql } from "@apollo/client";

export const countryReq = {
  getByCodePays: gql`
    query Query($code: ID!) {
      country(code: $code) {
        code
        name
        emoji
        currency
        capital
      }
    }
  `,
};
