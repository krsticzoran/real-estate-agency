import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.css";

import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const endpoint1 = new HttpLink({
  uri: "http://localhost:3000/graphql",
});

const endpoint2 = new HttpLink({
  uri: "http://localhost:3000/realestate",
});

const endpoint3 = new HttpLink({
  uri: "http://localhost:3000/bloggraphql",
});

const endpoint4 = new HttpLink({
  uri: "http://localhost:3000/auth",
});

const client = new ApolloClient({
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

export default client;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
