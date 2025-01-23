import Header from "./components/Header"
import SearchSection from "./components/SearchSection"
import FeaturedDoctors from "./components/FeaturedDoctors"
import Services from "./components/Services"
import Footer from "./components/Footer"
import React from "react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <SearchSection />
        <FeaturedDoctors />
        <Services />
      </main>
      <Footer />
    </div>
  )
}
