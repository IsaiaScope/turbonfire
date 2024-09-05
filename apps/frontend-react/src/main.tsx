import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "@/styles/global.css";
import TanstackQueryProvider from "@/utility/providers/query-client.tsx";
import { ThemeProvider } from "@/utility/providers/dark-mode.tsx";
import "@/utility/i18next/i18next";
import TanstackRouterProvider from "@/utility/providers/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackQueryProvider>
      <ThemeProvider>
        <Suspense fallback={<div className="text-black">Loading...</div>}>
          <TanstackRouterProvider />
        </Suspense>
      </ThemeProvider>
    </TanstackQueryProvider>
  </StrictMode>,
);
