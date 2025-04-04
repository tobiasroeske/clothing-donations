import type { FC } from 'react'

const Home: FC = () => {
  return (
    <>
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
      <section id="about-us">
        <h2>Gemeinsam helfen, nachhaltig handeln</h2>
        <article>

        </article>
      </section>
    </>
  )
}
export default Home
