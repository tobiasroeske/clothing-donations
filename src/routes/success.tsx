import { SuccessPage } from '@/pages/Success'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/success')({
  component: SuccessPage,
})
