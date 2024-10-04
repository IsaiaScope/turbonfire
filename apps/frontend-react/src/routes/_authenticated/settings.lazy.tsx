import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authenticated/settings')({
  component: () => <div>Hello /_authenticated/settings!</div>
})