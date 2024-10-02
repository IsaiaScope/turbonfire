import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/games/randomiser')({
  component: () => <div>Hello /games/randomiser!</div>
})