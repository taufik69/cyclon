// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-range-slider-input/dist/style.css";
import "./index.css";
import "react-inner-image-zoom/lib/styles.min.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
