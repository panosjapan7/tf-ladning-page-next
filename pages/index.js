import Image from 'next/image'
import Masthead from '../components/masthead'
import Navigation from '../components/navigation'

export default function Home() {
  return (
    <div >
      <Navigation />
      <Masthead />
    </div>
  )
}
