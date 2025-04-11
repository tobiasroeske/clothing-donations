import type { ComponentProps, FC } from 'react'
import { useFieldContext } from '.'
import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { FieldErrors } from './field-errors'

type SelectOption = {
  value: string
  label: string
}

type SelectFieldProps = ComponentProps<typeof Select> & {
  label: string
  options: SelectOption[]
  withError?: boolean
  placeholder?: string
}

export const SelectField: FC<SelectFieldProps> = ({
  label,
  options,
  withError = false,
  placeholder,
  ...props
}) => {
  const field = useFieldContext<string>()

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <Label htmlFor={field.name}>{label}</Label>
        <Select
          value={field.state.value}
          onValueChange={(val) => field.handleChange(val)}
          {...props}
        >
          <SelectTrigger id={field.name} onBlur={field.handleBlur}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {withError && <FieldErrors meta={field.state.meta} />}
    </div>
  )
}
