import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

import { CiMenuBurger } from 'react-icons/ci'
import type { FC } from 'react'
import { cn } from '@/lib/utils'
import { MobileModeToggle } from './mobile-mode-toggle'
import { siteConfig } from '@/config/site-config'

type NavMobileProps = {
  className?: string
}

const NavMobile: FC<NavMobileProps> = ({ className }) => {
  return (
    <nav className={cn(className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <CiMenuBurger />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {siteConfig.navLinks.map((link, i) => (
            <DropdownMenuItem key={i}>
              <Link to={link.href}>{link.title}</Link>
            </DropdownMenuItem>
          ))}

          <MobileModeToggle />
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}

export default NavMobile
