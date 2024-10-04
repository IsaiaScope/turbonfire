import { cn } from '@packages/utilities-on-fire/cn';
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/apps/weight/')({
  component: () => <div className={cn("bg-green-700")}>Hello /weight/!</div>
})