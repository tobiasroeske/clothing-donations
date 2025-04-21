import type { FC } from 'react'
import { Label } from '../ui/label'
import { MultiSelect } from '../ui/multi-select'
import { useFieldContext } from '.'
import { FieldErrors } from './field-errors'
import { cn } from '@/lib/utils'

type Option = {
  value: string
  label: string
}

type MultiSelectFieldProps = {
  label: string
  className?: string
  options: Option[]
  withError?: boolean
  placeholder?: string
}

export const MultiSelectField: FC<MultiSelectFieldProps> = ({
  label,
  options,
  className,
  withError = false,
  placeholder,
  ...props
}) => {
  const field = useFieldContext<string[]>()
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={field.name}>{label}</Label>
      <MultiSelect
        options={options}
        id={field.name}
        defaultValue={field.state.value}
        placeholder={placeholder ? placeholder : ''}
        onValueChange={field.handleChange}
        {...props}
      />
      {withError && <FieldErrors meta={field.state.meta} />}
    </div>
  )
}
