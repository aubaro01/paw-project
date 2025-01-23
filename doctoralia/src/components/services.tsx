import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Video, MessageSquare } from 'lucide-react'
import React from "react"

export default function Services() {
  const services = [
    {
      title: "Marque consultas",
      description: "Agende consultas com médicos de forma rápida e fácil.",
      icon: Calendar
    },
    {
      title: "Consultas online",
      description: "Realize consultas por videochamada com médicos qualificados.",
      icon: Video
    },
    {
      title: "Faça perguntas",
      description: "Tire suas dúvidas com profissionais de saúde.",
      icon: MessageSquare
    }
  ]

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-600 mx-auto" />
                <CardTitle className="text-center mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
