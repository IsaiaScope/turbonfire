import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/game/randomiser')({
  component: () => <div>Hello /games/randomiser!</div>
})