import SearchSection from "./components/search-section"
import Services from "./components/services"
import FeaturedDoctors from "./components/featured-doctors"

export default function Home() {
  return (
    <main>
      <SearchSection />
      <Services />
      <FeaturedDoctors />
    </main>
  )
}