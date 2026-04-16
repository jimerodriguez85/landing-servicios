import { useState } from 'react'
import SplashScreen from './components/SplashScreen'
import Particles from './components/Particles'
import NeonCursor from './components/NeonCursor'
import ThemeToggle from './components/ThemeToggle'
import VisitorCounter from './components/VisitorCounter'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Showcase from './components/Showcase'
import TechStack from './components/TechStack'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import AboutMe from './components/AboutMe'
// import Pricing from './components/Pricing'
import Blog from './components/Blog'
import ContactForm from './components/ContactForm'
import WhatsAppButton from './components/WhatsAppButton'
import Chatbot from './components/Chatbot'
import EasterEgg from './components/EasterEgg'
import Coverage from './components/Coverage'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <SplashScreen onComplete={() => setLoaded(true)} />

      <div className={`relative ${loaded ? '' : 'invisible'}`}>
        <Particles />
        <NeonCursor />
        <ThemeToggle />
        <VisitorCounter />
        <EasterEgg />

        <Hero />
        <Services />
        <Portfolio />
        <Showcase />
        <TechStack />
        <Stats />
        <Testimonials />
        <AboutMe />
        {/* <Pricing /> */}
        <Blog />
        <ContactForm />
        <Coverage />
        <Footer />

        <WhatsAppButton />
        <Chatbot />
      </div>
    </>
  )
}
