import type { ComponentProps, FC } from 'react'
import { useFormContext } from '.'
import { Button } from '../ui/button'

type SubmitButtonProps = ComponentProps<typeof Button> & {
  label: string
}

export const SubmitButton: FC<SubmitButtonProps> = ({ label, ...props }) => {
  const form = useFormContext()

  return (
    <form.Subscribe
      selector={(state) => ({
        canSubmit: state.canSubmit,
        isSubmitting: state.isSubmitting,
      })}
    >
      {({ canSubmit, isSubmitting }) => (
        <Button
          type="submit"
          disabled={!canSubmit || isSubmitting}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          {...props}
        >
          {label}
        </Button>
      )}
    </form.Subscribe>
  )
}
