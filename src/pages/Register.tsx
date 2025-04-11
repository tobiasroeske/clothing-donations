import { useAppForm } from '@/components/form'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/config/site-config'
import {
  DefaultDonation,
  donationFormSchema,
} from '@/lib/schemas/donation-form-schema'
import { useState, type FC } from 'react'

type DonationType = 'pickup' | 'dropoff'

const DonationForm: FC = () => {
  const [type, setType] = useState<DonationType>('dropoff')

  const form = useAppForm({
    defaultValues: DefaultDonation,
    validators: {
      onChange: donationFormSchema,
    },
    onSubmit: async (values) => {
      console.log('Form submitted:', values)
      console.log('form errors:', form.state.errors)
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
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
          />
        )}
      </form.AppField>
      {type === 'pickup' && (
        <>
          <form.AppField name="address.street">
            {(field) => <field.Textfield label="Straße" withError/>}
          </form.AppField>
          <form.AppField name="address.postalCode">
            {(field) => <field.Textfield label="PLZ" withError/>}
          </form.AppField>
          <form.AppField name="address.location">
            {(field) => <field.Textfield label="Ort" withError/>}
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
          <Button type="submit" disabled={!canSubmit || isSubmitting}>
            Abschicken
          </Button>
        )}
      </form.Subscribe>
    </form>
  )
}

export const RegisterPage = () => {
  return (
    <>
      <section className="flex flex-col items-center w-full px-4 py-8 md:px-6 md:py-16 lg:px-8 lg:py-16">
        <h1 className="text-primary text-center sm:text-left">
          Jetzt Kleiderspende registrieren und Gutes tun
        </h1>
        <p>
          Hier kannst du deine Kleiderspende anmelden und selbst entscheiden,
          wohin sie gesendet werden soll. Wähle einfach, ob du deine Spende
          persönlich übergibst oder eine Abholung wünschst.
        </p>
      </section>
      <Card className="px-4">
        <h2>Anmeldung</h2>
        <DonationForm />
      </Card>
    </>
  )
}
