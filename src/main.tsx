import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // <--- CHANGE THIS (was BrowserRouter)
import App from "./App.tsx";
import "./index.css";
import "devicon/devicon.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      {" "}
      {/* <--- CHANGE THIS */}
      <App />
    </HashRouter>
  </React.StrictMode>,
);
