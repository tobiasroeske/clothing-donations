import { createFormHookContexts, createFormHook } from '@tanstack/react-form'
import { Textfield } from './textfield'
import { SelectField } from './select'
import { RadioGroupField } from './radio-group-field'
import { MultiSelectField } from './multi-select-field'
import { SubmitButton } from './submit-button'

// export useFieldContext for use in your custom components
export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  // We'll learn more about these options later
  fieldComponents: {
    Textfield,
    SelectField,
    RadioGroupField,
    MultiSelectField,
  },
  formComponents: {SubmitButton},
})
