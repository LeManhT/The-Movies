import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./i18n";
import { store } from "./features/store";
import App from "./App";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
