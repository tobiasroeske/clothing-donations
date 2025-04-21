import { Button } from '@/components/ui/button'
import { capitalize } from '@/lib/utils'
import { Link, useLoaderData } from '@tanstack/react-router'

export const SuccessPage = () => {
  const donation = useLoaderData({ from: '/success/$donationId' })

  return (
    <div className="flex flex-col justify-start items-center min-h-[calc(100vh-168px)] px-4 py-10 md:px-8 md:py-20 bg-muted/50">
      <div className="w-full max-w-2xl bg-background p-8 rounded-lg shadow-sm space-y-6">
        <h1 className="text-2xl font-semibold text-primary text-center">
          Vielen Dank, {donation.name}, für deine Spende!
        </h1>

        <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
          {donation.type === 'pickup' ? (
            <>
              <p>
                Du hast dich für eine <strong>Abholung</strong> entschieden. Wir
                werden uns in Kürze bei dir melden.
              </p>
              <p>
                <strong>Abholadresse:</strong> {capitalize(donation.street)},{' '}
                {donation.postal_code} {capitalize(donation.location)}
              </p>
            </>
          ) : (
            <p>
              Du hast dich dafür entschieden, die Spende{' '}
              <strong>persönlich</strong> vorbeizubringen. Bitte komm zu unserer
              Übergabestelle.
            </p>
          )}

          <p>Hier sind die Details zu deiner Spende:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Krisengebiet:</strong> {capitalize(donation.crisis_area)}
            </li>
            <li>
              <strong>Kleidertypen:</strong> {donation.cloth_types.join(', ')}
            </li>
          </ul>
        </div>

        <div className="pt-6 flex justify-center">
          <Button asChild>
            <Link to="/">Zur Startseite zurück</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
