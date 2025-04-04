import { ThemeProvider } from '@/components/ui/theme-provider'
import RootLayout from '@/layouts/Layout'
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
