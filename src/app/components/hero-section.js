import { Button } from "@/app/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-teal-50 py-20 md:py-28">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#58c0a6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start space-y-6">
            <div className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-600">
              Saúde Mental é Prioridade
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Cuidando da sua <span className="text-teal-300">saúde mental</span> com empatia
            </h1>
            <p className="text-lg text-gray-600 md:text-xl max-w-lg">
              Encontre o psicólogo certo para você e comece sua jornada de autoconhecimento e bem-estar emocional.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-teal-300 hover:bg-teal-400 text-white">
                Agendar Consulta
              </Button>
              <Button size="lg" variant="outline" className="border-teal-300 text-teal-600 hover:bg-teal-50">
                Conhecer Especialistas
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md rounded-full bg-white p-4 shadow-xl">
            <div className="absolute inset-0 rounded-full bg-teal-100/50"></div>
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Psicólogo atendendo paciente"
                width={500}
                height={500}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -right-4 -top-4 rounded-full bg-teal-300 p-4 shadow-lg">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <span className="text-center text-sm font-bold text-teal-600">100% Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}