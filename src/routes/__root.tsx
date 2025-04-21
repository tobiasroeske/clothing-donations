import { Provider } from '@/components/provider'
import RootLayout from '@/layouts/layout'
import {
  Outlet,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { NotFound } from './404'

export const Route = createRootRoute({
  component: () => (
    <Provider>
      <RootLayout>
        <Outlet />
        <TanStackRouterDevtools />
      </RootLayout>
    </Provider>
  ),
  errorComponent: () => <NotFound />,
  notFoundComponent: () => <NotFound />,
})
