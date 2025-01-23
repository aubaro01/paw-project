import Header from "@/components/header"
import SearchSection from "@/components/search-section"
import Services from "@/components/services"
import FeaturedDoctors from "@/components/featured-doctors"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <SearchSection />
      <Services />
      <FeaturedDoctors />
      <Footer />
    </main>
  )
}