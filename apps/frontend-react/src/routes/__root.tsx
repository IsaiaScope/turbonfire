import Navbar from "@ui/navbar";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { type QueryClient } from "@tanstack/react-query";
// import PageTransitionProvider from "@/utility/providers/page-transition";
export interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Root,
});

function Root() {
  return (
    <>
      <div className="flex h-dvh flex-col overflow-hidden md:pt-24">
        <header>
          <Navbar />
        </header>
        {/* <PageTransitionProvider> */}
        <Outlet />
        {/* </PageTransitionProvider> */}
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
