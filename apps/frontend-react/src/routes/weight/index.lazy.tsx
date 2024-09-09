import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/weight/')({
  component: () => <div>Hello /weight/!</div>
})