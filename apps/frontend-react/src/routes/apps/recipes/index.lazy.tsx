import { createLazyFileRoute } from "@tanstack/react-router";
import { cn } from "@packages/utilities-on-fire/cn";
export const Route = createLazyFileRoute("/apps/recipes/")({
  component: () => (
    <div className={cn("bg-blue-700")}>Hello /homeisonfire/!</div>
  ),
});
