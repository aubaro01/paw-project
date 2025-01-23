import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"
import React from "react"

export default function SearchSection() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Encontre o seu médico e marque uma consulta</h1>
        <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="text" placeholder="Pesquisar especialidade, nome do médico..." className="pl-10" />
          </div>
          <div className="flex-grow relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input type="text" placeholder="Localização" className="pl-10" />
          </div>
          <Button size="lg" className="w-full md:w-auto">
            Pesquisar
          </Button>
        </div>
      </div>
    </section>
  )
}

