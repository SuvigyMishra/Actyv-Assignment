import React from "react";
import { createRoot } from "react-dom/client";
import { StoreProvider } from "easy-peasy";

import { store } from "./redux/store";

import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
