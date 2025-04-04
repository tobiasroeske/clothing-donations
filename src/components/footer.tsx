import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'

export const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground p-4 mt-auto">
      <div className="flex items-center justify-between">
        <span className="text-primary">Kleiderspende</span>
        <div className="flex flex-col items-end">
          <Button variant="link" className="text-primary">
            <Link to="/privacy-policy">Datenschutzerklärung</Link>
          </Button>
          <Button variant="link" className="text-primary">
            <Link to="/imprint">Impressum</Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
