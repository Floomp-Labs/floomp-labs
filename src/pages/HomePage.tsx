import { Bridge } from '../components/Bridge'
import { Consult } from '../components/Consult'
import { Faq } from '../components/Faq'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Nav } from '../components/Nav'
import { Pricing } from '../components/Pricing'
import { Seo } from '../components/Seo'
import { Trust } from '../components/Trust'
import { Work } from '../components/Work'

export function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Bridge />
        <Seo />
        <Pricing />
        <Trust />
        <Faq />
        <Consult />
      </main>
      <Footer />
    </>
  )
}
