import { cn } from '@/lib/utils'
import { memo } from 'react'

interface MenuBadgeProps {
  value: string | number
  className?: string
}

const MenuBadge = memo(({ value, className }: MenuBadgeProps) => {
  if (!value) return null

  const displayValue = typeof value === 'number' && value > 99 ? '99+' : String(value)

  return (
    <span
      className={cn(
        'absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-medium text-white',
        className
      )}
      aria-label={`${value} notifications`}
    >
      {displayValue}
    </span>
  )
})

MenuBadge.displayName = 'MenuBadge'

export default MenuBadge
