import Image from 'next/legacy/image'
import Masthead from '../components/masthead'
import Navigation from '../components/navigation'
import PortfolioGrid from '../components/portfolio-grid'
import Services from '../components/services'
import About from '../components/about'
import Team from '../components/team'
import Clients from '../components/clients'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div >
      <Navigation />
      <Masthead />
      <Services />
      <PortfolioGrid />
      <About />
      <Team />
      <Clients />
      <Footer />
    </div>
  )
}
