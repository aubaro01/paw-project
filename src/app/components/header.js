import React from "react"
import { Button } from "@/app/components/ui/button"
import { Menu } from 'lucide-react'
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Doctoralia
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            Para pacientes
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            Para profissionais
          </Link>
          <Button variant="outline">Entrar</Button>
          <Button>Registe-se</Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}