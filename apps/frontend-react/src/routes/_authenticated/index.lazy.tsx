import { cn } from "@packages/utilities-on-fire/cn";
import { Button } from "@shadcn/button";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/")({
  component: Index,
});

function Index() {
  return (
      <div className={cn("bg-indigo-500 md:border-l-indigo-500")}>
        <h3>Welcome Home!</h3>
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
  );
}
