import { ThemeProvider } from '@/components/theme-provider'
import RootLayout from '@/layouts/layout'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RootLayout>
        <Outlet />
        <TanStackRouterDevtools />
      </RootLayout>
    </ThemeProvider>
  ),
})
