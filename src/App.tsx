import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { DifferentialsSection } from './components/sections/DifferentialsSection'
import { HowItWorksSection } from './components/sections/HowItWorksSection'
import { FaqSection } from './components/sections/FaqSection'
import { ContactSection } from './components/sections/ContactSection'
import { Footer } from './components/sections/Footer'
import { FloatingActionButtons } from './components/ui/FloatingActionButtons'

export default function App() {
  return (
    <div className="bg-[#F8F6F2] text-[#28332C] font-sans selection:bg-[#2E4237] selection:text-white antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <HowItWorksSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  )
}
