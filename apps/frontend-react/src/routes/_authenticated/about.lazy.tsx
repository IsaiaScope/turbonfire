import { cn } from "@cn";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/about")({
  component: About,
});

function About() {
  return (
      <div className={cn("bg-red-700 md:bg-lime-500")}>Hello from About!</div>
  );
}
