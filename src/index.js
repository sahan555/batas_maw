import React from "react";
import ReactDOM from "react-dom/client";
import "./build.css";
import App from "./App";
import { Layout } from "./Global/Context/Layout";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Layout>
  </React.StrictMode>
);
