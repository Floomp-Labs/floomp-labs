import { Bridge } from './components/Bridge'
import { Consult } from './components/Consult'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Pricing } from './components/Pricing'
import { Seo } from './components/Seo'
import { Work } from './components/Work'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Work />
      <Bridge />
      <Seo />
      <Pricing />
      <Consult />
      <Footer />
    </>
  )
}

export default App
