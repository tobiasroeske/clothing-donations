import { createDonation } from '@/api/createDonation'
import { useAppForm } from '@/components/form'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site-config'
import {
  DefaultDonation,
  donationFormSchema,
} from '@/lib/schemas/donation-form-schema'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { useState, type FC } from 'react'
import { toast } from 'sonner'

type DonationType = 'pickup' | 'dropoff'

const DonationForm: FC = () => {
  const [type, setType] = useState<DonationType>('dropoff')
  const navigate = useNavigate()

  const createToast = () => {
    toast(siteConfig.toastMessage)
  }

  const form = useAppForm({
    defaultValues: DefaultDonation,
    validators: {
      onChange: donationFormSchema,
    },
    onSubmit: async (values) => {
      createToast()
      mutateAsync(values.value)
    },
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createDonation,
    onSuccess: ({ id }) => {
      return navigate({ to: `/success/${id}` })
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <div className="flex flex-col gap-4">
        <form.AppField name="type">
          {(field) => (
            <field.RadioGroupField<DonationType>
              label="Art der Spende"
              items={[
                { value: 'dropoff', label: 'Abgabe' },
                { value: 'pickup', label: 'Abholung' },
              ]}
              onValueChange={(value: DonationType) => {
                setType(value)
                field.handleChange(value)
              }}
              withError
            />
          )}
        </form.AppField>
        <form.AppField name="name">
          {(field) => (
            <field.Textfield
              label="Name"
              placeholder="Vorname Nachname"
              withError
            />
          )}
        </form.AppField>
        <form.AppField name="clothTypes">
          {(field) => (
            <field.MultiSelectField
              placeholder="Bitte wähle mindestens einen Kleidertyp aus"
              label="Kleiderart"
              options={siteConfig.clothTypes}
              withError
            />
          )}
        </form.AppField>
        <form.AppField name="crisisArea">
          {(field) => (
            <field.SelectField
              placeholder="Bitte wähle ein Krisengebiet aus"
              label="Krisengebiet"
              options={siteConfig.crisisAreas}
              withError
              className="w-full"
            />
          )}
        </form.AppField>
        {type === 'pickup' && (
          <>
            <form.AppField name="address.street">
              {(field) => <field.Textfield label="Straße" withError />}
            </form.AppField>
            <form.AppField name="address.postalCode">
              {(field) => <field.Textfield label="PLZ" withError />}
            </form.AppField>
            <form.AppField name="address.location">
              {(field) => <field.Textfield label="Ort" withError />}
            </form.AppField>
          </>
        )}
        <form.Subscribe
          selector={(state) => ({
            canSubmit: state.canSubmit,
            isSubmitting: state.isSubmitting,
          })}
        >
          {({ canSubmit, isSubmitting }) => (
            <Button
              type="submit"
              disabled={!canSubmit || isSubmitting || isPending}
            >
              Abschicken
            </Button>
          )}
        </form.Subscribe>
      </div>
    </form>
  )
}

export const RegisterPage = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-[calc(100vh-168px)] px-4 py-10 md:px-8 md:py-20 bg-muted/50">
      <div className="w-full max-w-2xl space-y-6 bg-background p-8 rounded-lg shadow-sm">
        <header className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-primary">
            Jetzt Kleiderspende registrieren und Gutes tun
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Hier kannst du deine Kleiderspende anmelden und selbst entscheiden,
            wohin sie gesendet werden soll. Wähle einfach, ob du deine Spende
            persönlich übergibst oder eine Abholung wünschst.
          </p>
        </header>

        <div>
          <h2 className="text-lg font-medium mb-4">Anmeldung</h2>
          <DonationForm />
        </div>
      </div>
    </section>
  )
}
