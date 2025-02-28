import HeroSection from "./components/hero-section"
import Services from "./components/services"
import FeaturedDoctors from "./components/featured-doctors"
import Testimonials from "./components/testimonials"
import AboutSection from "./components/about-section"
import ContactCTA from "./components/contact-cta"
import DoctorMap from "./components/doctor-map"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <FeaturedDoctors />
      <Testimonials />
      <ContactCTA />
      <DoctorMap />
    </>
  )
}