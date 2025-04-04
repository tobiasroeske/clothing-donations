import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'
import { Button } from './button'
import { ModeToggle } from '../mode-toggle'

type NavMainProps = {
  className?: string
}
const NavMain: FC<NavMainProps> = ({ className }) => {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/', label: 'Über uns' },
    { to: '/', label: 'Registrieren' },
  ]
  return (
    <nav
      className={cn(
        'flex items-center gap-8 justify-between px-4 py-2',
        className,
      )}
    >
      {navLinks.map((link, i) => (
        <>
          <Button variant="link" key={i} className="text-primary">
            <Link to={link.to} className="text-primary">
              {link.label}
            </Link>
          </Button>
        </>
      ))}
      <ModeToggle />
    </nav>
  )
}
export default NavMain
