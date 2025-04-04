import Header from '@/components/header'
import type { FC } from 'react'

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white p-4">Footer</footer>
    </div>
  )
}

export default RootLayout
