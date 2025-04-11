import type { FC } from 'react'
import { Label } from '../ui/label'
import { MultiSelect } from '../ui/multi-select'
import { useFieldContext } from '.'
import { FieldErrors } from './field-errors'

type Option = {
  value: string
  label: string
}

type MultiSelectFieldProps = {
  label: string
  options: Option[]
  withError?: boolean
  placeholder?: string
}

export const MultiSelectField: FC<MultiSelectFieldProps> = ({
  label,
  options,
  withError = false,
  placeholder,
  ...props
}) => {
  const field = useFieldContext<string[]>()
  return (
    <div className="space-y-2">
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
