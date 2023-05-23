import {
  ApolloClient,
  ApolloClientOptions,
  InMemoryCache,
} from "@apollo/client";

let fromFrontUrl = "https://countries.nausicaa.wilders.dev/";
if (process.env.BACK_URL) fromFrontUrl = process.env.BACK_URL;

const params: ApolloClientOptions<unknown> = {
  uri: fromFrontUrl,
  cache: new InMemoryCache(),
};

export const api = new ApolloClient(params);
