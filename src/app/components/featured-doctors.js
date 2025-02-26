import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/app/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Button } from "@/app/components/ui/button"
import { Calendar } from "lucide-react"

export default function FeaturedDoctors() {
  const specialists = [
    {
      name: "Dra. Ana Silva",
      specialty: "Psicologia Clínica",
      focus: "Ansiedade e Depressão",
      image: "/placeholder.svg?height=300&width=300",
      available: true,
    },
    {
      name: "Dr. João Santos",
      specialty: "Psicologia Cognitivo-Comportamental",
      focus: "Transtornos de Ansiedade",
      image: "/placeholder.svg?height=300&width=300",
      available: true,
    },
    {
      name: "Dra. Maria Oliveira",
      specialty: "Neuropsicologia",
      focus: "Desenvolvimento Infantil",
      image: "/placeholder.svg?height=300&width=300",
      available: false,
    },
    {
      name: "Dr. Carlos Mendes",
      specialty: "Psicologia Junguiana",
      focus: "Autoconhecimento",
      image: "/placeholder.svg?height=300&width=300",
      available: true,
    },
  ]

  return (
    <section id="especialistas" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Nossos Especialistas</h2>
        <p className="section-subtitle">
          Conheça nossa equipe de psicólogos altamente qualificados e prontos para ajudar você em sua jornada.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist, index) => (
            <Card
              key={index}
              className="border border-gray-100 hover:border-teal-200 transition-colors duration-300 overflow-hidden"
            >
              <div className="relative pt-[100%] bg-gray-100">
                <Avatar className="absolute inset-0 w-full h-full rounded-none">
                  <AvatarImage src={specialist.image} alt={specialist.name} className="object-cover" />
                  <AvatarFallback className="rounded-none text-4xl">
                    {specialist.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {specialist.available && (
                  <div className="absolute top-4 right-4 bg-teal-300 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Disponível
                  </div>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold">{specialist.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm font-medium text-teal-600">{specialist.specialty}</p>
                <p className="text-sm text-gray-500">Foco: {specialist.focus}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-teal-300 hover:bg-teal-400 text-white">
                  <Calendar className="mr-2 h-4 w-4" /> Agendar Consulta
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}