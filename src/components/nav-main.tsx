import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import { siteConfig } from '@/config/site-config'

type NavMainProps = {
  className?: string
}
const NavMain: FC<NavMainProps> = ({ className }) => {
  return (
    <nav
      className={cn('flex items-center gap-8 justify-between py-2', className)}
    >
      {siteConfig.navLinks.map((link, i) => (
        <Button variant="link" key={i} className="text-primary">
          <Link to={link.href} className="text-primary">
            {link.title}
          </Link>
        </Button>
      ))}
      <ModeToggle />
    </nav>
  )
}
export default NavMain
