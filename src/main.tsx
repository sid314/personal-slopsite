import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "devicon/devicon.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* We removed <Routes> here. App handles routing now. */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
