import React, { forwardRef, type ComponentProps } from 'react'
import { Button } from './ui/button'
import { useNavigate } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

type LinkButtonProps = ComponentProps<typeof Button> & {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outline' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg'
  disabled?: boolean
  isLoading?: boolean
  href: string
}

export const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({ children, className, href, ...props }, ref) => {
    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      if (props.disabled) return
      if (props.isLoading) return
      navigate({ to: href })
    }
    return (
      <Button
        onClick={handleClick}
        ref={ref}
        {...props}
        className={cn(
          `${props.isLoading || props.disabled ? 'cursor-none' : 'cursor-pointer'}`,
          className,
        )}
      >
        {children}
      </Button>
    )
  },
)
