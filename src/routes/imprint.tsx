import ImprintPage from '@/pages/Imprint'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/imprint')({
  component: ImprintPage,
})
