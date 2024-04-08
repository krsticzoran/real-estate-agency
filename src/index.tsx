import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.css";

import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider } from "@apollo/client";
import ApolloAppProvider from "./graphql/ApolloProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={ApolloAppProvider}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
