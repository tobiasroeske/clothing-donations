import type { ComponentProps } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { useFieldContext } from '.'
import { FieldErrors } from './field-errors'

type RadioItemValues<T extends string> = {
  value: T
  label: string
}

type RadioGroupProps<T extends string> = ComponentProps<typeof RadioGroup> & {
  label: string
  items: RadioItemValues<T>[]
  withError?: boolean
  onValueChange?: (value: T) => void
}

export const RadioGroupField = <T extends string>({
  label,
  items,
  withError = false,
  onValueChange
} : RadioGroupProps<T>) => {
  const field = useFieldContext<string>()
  const handleChange = (value: T) => {
    field.handleChange(value)
    onValueChange?.(value)
  }
  return (
    <div className="space-y-2">
      <Label htmlFor={field.name}>{label}</Label>
      <RadioGroup
        defaultValue={field.state.value}
        onValueChange={handleChange}
        id={field.name}
        className='flex'
      >
        {items.map((item) => (
          <div key={item.value} className="flex items-center space-x-2">
            <RadioGroupItem
              id={item.value}
              value={item.value}
              onBlur={field.handleBlur}
            />
            <Label htmlFor={item.value}>{item.label}</Label>
          </div>
        ))}
      </RadioGroup>
      {withError && <FieldErrors meta={field.state.meta} />}
    </div>
  )
}
