import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function FeaturedDoctors() {
  const doctors = [
    {
      name: "Dr. Ana Silva",
      specialty: "Cardiologia",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. João Santos",
      specialty: "Dermatologia",
      image: "/placeholder.svg"
    },
    {
      name: "Dra. Maria Oliveira",
      specialty: "Pediatria",
      image: "/placeholder.svg"
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Médicos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index}>
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src={doctor.image} alt={doctor.name} />
                  <AvatarFallback>
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-center mt-4">{doctor.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{doctor.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
