import type { FC } from 'react'
import NavMobile from './nav-mobile'
import NavMain from './ui/nav-main'

const Header: FC = () => {
  return (
    <header className="bg-background h-fit text-foreground shadow-md fixed inset-0 z-10">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto ">
        <img
          className="h-16 w-auto dark:hidden"
          src="/logo.png"
          alt="Logo der Kleiderspenden-Plattform: Eine stilisierte Darstellung eines T-Shirts mit einem Herzsymbol darüber, gehalten von einer offenen Hand – Symbol für Mitgefühl, Hilfe und Kleidungsspenden"
        />
        <img
          className="h-16 w-auto hidden dark:block"
          src="/logo_dark.png"
          alt="Logo der Kleiderspenden-Plattform: Eine stilisierte Darstellung eines T-Shirts mit einem Herzsymbol darüber, gehalten von einer offenen Hand – Symbol für Mitgefühl, Hilfe und Kleidungsspenden"
        />
        <NavMobile className="md:hidden" />
        <NavMain className="hidden md:flex" />
      </div>
    </header>
  )
}

export default Header
