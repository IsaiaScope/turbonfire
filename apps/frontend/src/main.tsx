import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/global.css";
import TanstackQueryProvider from "@/utility/providers/query-client.tsx";
import { ThemeProvider } from "@/utility/providers/dark-mode.tsx";
import "@/utility/i18next/i18next";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanstackQueryProvider>
      <ThemeProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
      </ThemeProvider>
    </TanstackQueryProvider>
  </React.StrictMode>,
);
