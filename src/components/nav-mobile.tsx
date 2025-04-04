import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

import { CiMenuBurger } from 'react-icons/ci'
import type { FC } from 'react'
import { cn } from '@/lib/utils'
import { MobileModeToggle } from './mobile-mode-toggle'

type NavMobileProps = {
  className?: string
}

const NavMobile: FC<NavMobileProps> = ({ className }) => {
  return (
    <nav className={cn('px-4', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <CiMenuBurger />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* <DropdownMenuLabel>Navigation</DropdownMenuLabel>
          <DropdownMenuSeparator /> */}
          <DropdownMenuItem>
            <Link to="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/">Über uns</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/">Registrieren</Link>
          </DropdownMenuItem>
          <MobileModeToggle />
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}

export default NavMobile
