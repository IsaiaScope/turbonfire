import Navbar from "@ui/navbar";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { type QueryClient } from "@tanstack/react-query";
import GsapPageTransitionProvider from "@/utility/providers/gsap-page-tansition";

export interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Root,
});

function Root() {
  return (
    <>
      <div className="flex h-dvh flex-col overflow-hidden">
        <header className='z-10'>
          <Navbar />
        </header>
        <GsapPageTransitionProvider>
          <Outlet />
        </GsapPageTransitionProvider>
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
