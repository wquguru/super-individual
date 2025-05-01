import Header from './components/Header'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServicesSection />
      <About />
      <Testimonials />
      <FAQ />
    </div>
  )
} 