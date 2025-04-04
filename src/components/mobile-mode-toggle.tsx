import { LaptopMinimal, Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from './ui/theme-provider'

export const MobileModeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <div className='flex gap-2 items-center justify-center py-2'>
      <Button variant="outline" size="icon" onClick={() => setTheme('light')}>
        <Sun />
      </Button>
      <Button variant="outline" size="icon" onClick={() => setTheme('dark')}>
        <Moon />
      </Button>
      <Button variant="outline" size="icon" onClick={() => setTheme('system')}><LaptopMinimal /></Button>
    </div>
  )
}
