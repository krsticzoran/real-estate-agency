import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const endpoint1 = new HttpLink({
  uri: "https://real.estate.zkrstic.com/graphql",
});

const endpoint2 = new HttpLink({
  uri: "https://real.estate.zkrstic.com/realestate",
});

const endpoint3 = new HttpLink({
  uri: "https://real.estate.zkrstic.com/bloggraphql",
});

const endpoint4 = new HttpLink({
  uri: "https://real.estate.zkrstic.com/auth",
});

const ApolloAppProvider = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === "endpoint2",
    endpoint2,
    ApolloLink.split(
      (operation) => operation.getContext().clientName === "endpoint3",
      endpoint3,
      ApolloLink.split(
        (operation) => operation.getContext().clientName === "endpoint4",
        endpoint4,
        endpoint1
      )
    )
  ),
  cache: new InMemoryCache(),
});

export default ApolloAppProvider;
