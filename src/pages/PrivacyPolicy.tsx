const PrivacyPolicy = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-[calc(100vh-168px)] px-4 py-10 md:px-8 md:py-20 bg-muted/50">
      <div className="w-full max-w-2xl bg-background p-8 rounded-lg shadow-sm space-y-6">
        <header className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-primary">Datenschutzerklärung</h1>
          <p className="text-muted-foreground text-sm">
            Informationen gemäß Datenschutzgesetz (DSG) und DSGVO
          </p>
        </header>

        <div className="text-base leading-relaxed text-muted-foreground space-y-4">
          <p>
            Der Schutz deiner persönlichen Daten ist mir ein besonderes Anliegen. Ich verarbeite deine Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSG, DSGVO). In dieser Datenschutzerklärung informiere ich dich über die wichtigsten Aspekte der Datenverarbeitung im Rahmen dieser Website.
          </p>

          <h2 className="text-lg font-medium mt-6">1. Verantwortlicher</h2>
          <p>
            Tobias Roeske <br />
            Habsburgerstrasse 52 <br />
            6003 Luzern <br />
            Schweiz <br />
            E-Mail:{' '}
            <a
              href="mailto:info@tobias-roeske.ch"
              className="text-primary underline hover:text-primary/80"
            >
              info@tobias-roeske.ch
            </a>
          </p>

          <h2 className="text-lg font-medium mt-6">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p>
            Beim Besuch dieser Website werden keine personenbezogenen Daten automatisch gespeichert, außer es erfolgt eine aktive Eingabe durch dich (z. B. durch das Registrierungsformular für Kleiderspenden).
          </p>

          <p>
            Die im Rahmen des Spendenformulars eingegebenen Daten (z. B. Name, Adresse, Kleidertypen) werden ausschließlich zum Zweck der Bearbeitung deiner Spende verwendet.
          </p>

          <h2 className="text-lg font-medium mt-6">3. Datenübermittlung</h2>
          <p>
            Eine Übermittlung deiner Daten an Dritte erfolgt nicht, es sei denn, dies ist zur Erfüllung gesetzlicher Pflichten notwendig.
          </p>

          <h2 className="text-lg font-medium mt-6">4. Speicherung</h2>
          <p>
            Die erhobenen Daten werden nur so lange gespeichert, wie es für die oben genannten Zwecke erforderlich ist.
          </p>

          <h2 className="text-lg font-medium mt-6">5. Deine Rechte</h2>
          <p>
            Dir stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu. Bei datenschutzrechtlichen Anliegen kannst du dich jederzeit an mich wenden.
          </p>

          <p className="text-sm italic">
            Hinweis: Diese Website ist Teil eines studentischen Projekts und dient ausschließlich Demonstrationszwecken. Es besteht kein kommerzieller Hintergrund.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
