import { cn } from '@cn';
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/weight/')({
  component: () => <div className={cn("bg-green-700")}>Hello /weight/!</div>
})