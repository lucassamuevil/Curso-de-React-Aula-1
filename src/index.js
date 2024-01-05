import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from 'react-dom/client'; // Importe createRoot corretamente

const root = document.getElementById("root");

// Usamos createRoot para renderizar o aplicativo
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
