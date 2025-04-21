import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/404')({
  component: NotFound,
})

export function NotFound() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Seite nicht gefunden
      </h1>
      <p className="text-gray-700">Die gewünschte Seite existiert nicht.</p>
    </div>
  )
}
