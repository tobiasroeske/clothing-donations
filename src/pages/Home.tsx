import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg">
        This is a simple React app with TypeScript and Tailwind CSS.
      </p>
      <Link to="/about"> About</Link>
      <Button variant="outline">Click Me</Button>

    </div>
  )
}
export default Home
