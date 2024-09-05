import { createLazyFileRoute } from "@tanstack/react-router";
import { cn } from "@cn";

export const Route = createLazyFileRoute("/_authenticated/profile")({
  component: Profile,
});

function Profile() {
  const { user } = Route.useRouteContext();

  return (
      <div className={cn("md:bg-red-400-50 bg-red-700")}>
        <pre>
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      </div>
  );
}
