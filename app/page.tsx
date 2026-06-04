import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Process from '@/components/Process'
import QualiopiCTA from '@/components/QualiopiCTA'
import Temoignages from '@/components/Temoignages'
import Tarifs from '@/components/Tarifs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <QualiopiCTA />
      <Temoignages />
      <Tarifs />
      <Contact />
      <Footer />
    </>
  )
}
