import { createLazyFileRoute } from "@tanstack/react-router";
import { cn } from "@cn";
export const Route = createLazyFileRoute("/recipe/")({
  component: () => (
    <div className={cn("bg-blue-700")}>Hello /homeisonfire/!</div>
  ),
});
