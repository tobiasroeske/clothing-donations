const ImprintPage = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-[calc(100vh-168px)] px-4 py-10 md:px-8 md:py-20 bg-muted/50">
      <div className="w-full max-w-2xl bg-background p-8 rounded-lg shadow-sm space-y-6">
        <header className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-primary">Impressum</h1>
          <p className="text-muted-foreground text-sm">
            Angaben gemäß § 5 TMG (Deutschland) bzw. Impressumspflicht (Schweiz)
          </p>
        </header>

        <div className="text-base leading-relaxed text-muted-foreground space-y-4">
          <p>
            <strong>Verantwortlich für den Inhalt dieser Website:</strong>
            <br />
            Tobias Roeske <br />
            Habsburgerstrasse 52 <br />
            6003 Luzern <br />
            Schweiz
          </p>

          <p>
            <strong>Kontakt:</strong> <br />
            E-Mail:{' '}
            <a
              href="mailto:info@tobias-roeske.ch"
              className="text-primary underline hover:text-primary/80"
            >
              info@tobias-roeske.ch
            </a>
          </p>

          <p className="text-sm italic">
            Diese Website ist Teil eines studentischen Projekts im Rahmen eines
            Hochschulstudiums. Sie dient ausschließlich Demonstrationszwecken
            und stellt kein kommerzielles Angebot dar.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ImprintPage
