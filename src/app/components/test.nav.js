import React from "react";
import { Button, CityInput, SearchButton } from "@/app/components/ui/button"; // Adiciona CityInput e SearchButton
import { Menu } from "lucide-react";
import Link from "next/link";

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
          <div className="flex gap-2">
            <CityInput /> {/* Input para cidade */}
            <SearchButton /> {/* Botão de pesquisa quadrado */}
          </div>

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
  );
}
