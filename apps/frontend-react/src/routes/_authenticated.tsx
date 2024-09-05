import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Button } from "@shadcn/button";
import { getCurrentUserQuery } from "@/utility/backend/api-user";

const Login = () => {
  return (
      <div className="flex flex-col items-center gap-y-2">
        <p>You have to login or register</p>
        <Button asChild>
          <a href="/api/kinde/login">Login!</a>
        </Button>
        <Button asChild>
          <a href="/api/kinde/register">Register!</a>
        </Button>
      </div>
  );
};

const Component = () => {
  const { user } = Route.useRouteContext();
  if (!user) {
    return <Login />;
  }

  return <Outlet />;
};

// src/routes/_authenticated.tsx
export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    const queryClient = context.queryClient;

    try {
      const userData = await queryClient.fetchQuery(getCurrentUserQuery);
      return { user: userData };
    } catch (e) {
      return { user: null };
    }
  },
  component: Component,
});
