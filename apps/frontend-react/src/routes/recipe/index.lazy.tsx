import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/recipe/')({
  component: () => <div>Hello /homeisonfire/!</div>
})