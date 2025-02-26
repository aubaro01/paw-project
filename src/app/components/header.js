"use client"

import { useState, useEffect } from "react"
import { Button } from "@/app/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const pathname = usePathname()

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const isActive = (path) => {
    return pathname === path ? "text-teal-300 font-medium" : "text-gray-600 hover:text-teal-300"
  }

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const navItems = [
    { name: "Sobre", path: "#sobre" },
    { name: "Serviços", path: "#servicos" },
    { name: "Especialistas", path: "#especialistas" },
    { name: "Depoimentos", path: "#depoimentos" },
    { name: "Contato", path: "#contato" },
  ]

  return (
    <header
      className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-teal-300 font-poppins">
              MenteCare
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`${isActive(item.path)} transition-colors duration-200 text-base py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-teal-300 after:transition-all hover:after:w-full`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/test"
              className={`${isActive("/test")} transition-colors duration-200 flex items-center text-base py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-teal-300 after:transition-all hover:after:w-full`}
            >
              <span className="bg-teal-100 text-teal-600 text-xs font-medium px-2 py-1 rounded-full mr-2">Novo</span>
              Componentes
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="border-teal-300 text-teal-300 hover:bg-teal-50 px-5 py-2 h-auto">
              Entrar
            </Button>
            <Button className="bg-teal-300 hover:bg-teal-400 text-white px-5 py-2 h-auto">Agendar Consulta</Button>
          </div>

          {/* Mobile Menu Button and Components Link */}
          <div className="flex items-center lg:hidden space-x-3">
            <Link href="/test">
              <Button size="sm" variant="secondary" className="bg-teal-100 text-teal-600 hover:bg-teal-200 mr-2">
                Componentes
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="h-10 w-10 rounded-full"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t mobile-menu-container">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-gray-600 hover:text-teal-300 transition-colors py-2 border-b border-gray-100 flex justify-between items-center"
                  onClick={toggleMenu}
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="outline" className="border-teal-300 text-teal-300 hover:bg-teal-50 w-full">
                  Entrar
                </Button>
                <Button className="bg-teal-300 hover:bg-teal-400 text-white w-full">Agendar Consulta</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}