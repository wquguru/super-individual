import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Grid } from './components/Grid'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import ServicesSection from './components/ServicesSection'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'

const resources = [
  {
    title: 'The Ultimate Guide to Personal Branding',
    description: 'Learn how to build a strong personal brand that stands out in the digital age.',
    imageSrc: '/images/personal-branding.jpg',
    imageAlt: 'Personal branding guide cover image',
    href: '/resources/personal-branding',
  },
  {
    title: 'Productivity System Template',
    description: 'A complete system to organize your work and life, inspired by GTD and other methodologies.',
    imageSrc: '/images/productivity.jpg',
    imageAlt: 'Productivity system template cover image',
    href: '/resources/productivity-system',
  },
  {
    title: 'Developer Career Blueprint',
    description: 'A step-by-step guide to advancing your career as a software developer.',
    imageSrc: '/images/career.jpg',
    imageAlt: 'Developer career blueprint cover image',
    href: '/resources/career-blueprint',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServicesSection />
      <About />
      <Testimonials />
      <Grid
        title="Featured Resources"
        description="Curated guides and templates to help you grow personally and professionally."
      >
        {resources.map((resource) => (
          <Card key={resource.title} {...resource} />
        ))}
      </Grid>
      <FAQ />
      <Footer />
    </div>
  )
} 