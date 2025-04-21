import { type FC } from 'react'
import { ThemeProvider } from './theme-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type ProviderProps = {
  children: React.ReactNode
}

export const Provider: FC<ProviderProps> = ({ children }) => {
  const queryClient = new QueryClient()
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}
