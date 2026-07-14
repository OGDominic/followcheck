import React from "react";
import { createRoot } from "react-dom/client";
import SidePanel from "./SidePanel";
import "./sidepanel.css";

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <SidePanel />
    </React.StrictMode>
  );
}
