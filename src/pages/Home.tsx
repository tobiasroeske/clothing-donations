import { LinkButton } from '@/components/link-button'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import type { FC } from 'react'

const HeroSection = () => {
  return (
    <section>
      <img
        className="md:hidden block w-full aspect-square object-cover object-top"
        src="/hero_img_mobile.png"
        alt="Logo und Slogan der Kleiderspende-Initiative mit T-Shirt-Motiv – Symbol für Hilfe und Solidarität."
      />
      <img
        className="hidden md:block w-full aspect-[5/3] object-cover object-top"
        src="/hero_img_square.png"
        alt="Logo und Slogan der Kleiderspende-Initiative mit T-Shirt-Motiv – Symbol für Hilfe und Solidarität."
      />
    </section>
  )
}



const AboutSection = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col items-center w-full px-4 py-8 md:px-6 md:py-16 lg:px-8 lg:py-16"
    >
      <h2 className="text-primary text-center">
        "Gemeinsam helfen, nachhaltig handeln"
      </h2>
      <div className="flex flex-col md:flex-row max-w-[1440px] pt-8 md:pt-10 lg:pt-14 gap-8">
        <article className="w-full md:w-1/2 flex flex-col gap-4">
          <h3>Kleiderspenden einfach gemacht</h3>
          <p>
            Unsere Mission ist es, Kleiderspenden so einfach und effektiv wie
            möglich zu gestalten. Bei uns kannst du unkompliziert Kleidung
            spenden, die du nicht mehr benötigst, und dabei nachhaltig handeln.
            Jeder Beitrag hilft, Ressourcen zu schonen, Müll zu reduzieren und
            anderen Menschen in schwierigen Lebenssituationen zu helfen. Werde
            Teil unserer Community und mach mit bei unserer Initiative für eine
            bessere Zukunft.
          </p>
          <h4>So funktioniert es:</h4>
          <ol className="list-decimal list-inside pl-4 space-y-2">
            <li>Registriere dich auf unserer Plattform.</li>
            <li>Gib an, welche Kleidungsstücke du spenden möchtest.</li>
            <li>
              Wähle eine Spendenmöglichkeit in deiner Nähe oder organisiere eine
              Abholung.
            </li>
          </ol>
          <LinkButton href='/register' className="mt-8 w-full self-center hidden md:block max-w-[400px] bg-primary text-white">
            Jetzt registriere
          </LinkButton>
        </article>
        <img
          src="/about_img.webp"
          alt="Eine freundliche Gruppe von Menschen verschiedener Altersgruppen und kultureller Hintergründe sortiert und verpackt gemeinsam Kleidungsstücke für eine Kleiderspende, im Hintergrund stehen deutlich beschriftete Boxen mit dem Hinweis ‚Donations‘. Die Atmosphäre ist positiv und gemeinschaftlich, geprägt von Nachhaltigkeit und sozialem Engagement."
          className="w-full rounded-md md:w-1/2 object-cover object-center"
        />
      </div>
      <LinkButton href='/register' className="mt-8 w-full md:hidden max-w-[400px] bg-primary text-white">
        Jetzt registriere
      </LinkButton>
    </section>
  )
}

const Home: FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  )
}
export default Home
