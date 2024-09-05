import { RouterProvider, createRouter } from "@tanstack/react-router";
import { TANSTACK } from "../constants/tanstack";

// Import the generated route tree
import { routeTree } from "@/routeTree.gen";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { queryClient: TANSTACK.CLIENT },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function TanstackRouterProvider() {
  return <RouterProvider router={router} />;
}
