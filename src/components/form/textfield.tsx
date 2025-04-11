import { type ComponentProps, type FC } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useFieldContext } from '.'
import { FieldErrors } from './field-errors'

type TextfieldProps = ComponentProps<typeof Input> & {
  label?: string
  withError?: boolean
}

export const Textfield: FC<TextfieldProps> = ({
  label,
  withError = false,
  ...props
}) => {
  const field = useFieldContext<string>()

  return (
    <div className="space-y-1">
      <Label htmlFor={field.name}>{label}</Label>
      <Input
        id={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder ? props.placeholder : ''}
        {...props}
      />
      {withError && <FieldErrors meta={field.state.meta} />}
    </div>
  )
}
