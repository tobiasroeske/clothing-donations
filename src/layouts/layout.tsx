import { Footer } from '@/components/footer'
import Header from '@/components/header'
import type { FC } from 'react'

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="mt-16 flex-grow bg-background">{children}</main>
      <Footer />
    </div>
  )
}

export default RootLayout
