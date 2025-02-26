import { Card, CardContent } from "@/app/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
export { AvatarImage } from "@/app/components/ui/avatar"
import { Star } from "lucide-react"

export default function Testimonials() {
  const patientTestimonials = [
    {
      name: "Mariana Costa",
      image: "/placeholder.svg?height=100&width=100",
      text: "As sessões com a Dra. Ana mudaram minha vida. Aprendi a lidar com minha ansiedade de forma saudável e agora me sinto muito mais confiante.",
      rating: 5,
      type: "Paciente",
    },
    {
      name: "Ricardo Almeida",
      image: "/placeholder.svg?height=100&width=100",
      text: "Estava enfrentando um momento difícil no trabalho e a terapia me ajudou a desenvolver estratégias para lidar com o estresse. Recomendo muito!",
      rating: 5,
      type: "Paciente",
    },
    {
      name: "Juliana Ferreira",
      image: "/placeholder.svg?height=100&width=100",
      text: "A terapia de casal salvou meu casamento. Aprendemos a nos comunicar melhor e resolver conflitos de forma construtiva.",
      rating: 5,
      type: "Paciente",
    },
  ]

  const professionalTestimonials = [
    {
      name: "Dr. Roberto Mendes",
      image: "/placeholder.svg?height=100&width=100",
      text: "Fazer parte da equipe MenteCare tem sido uma experiência incrível. A estrutura e o suporte oferecidos nos permitem focar totalmente no bem-estar dos pacientes.",
      rating: 5,
      type: "Psicólogo",
    },
    {
      name: "Dra. Camila Rocha",
      image: "/placeholder.svg?height=100&width=100",
      text: "O ambiente colaborativo entre os profissionais e a abordagem centrada no paciente fazem da MenteCare um lugar especial para trabalhar e crescer profissionalmente.",
      rating: 5,
      type: "Psicóloga",
    },
  ]

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))
  }

  return (
    <section id="depoimentos" className="py-20 bg-teal-50">
      <div className="container">
        <h2 className="section-title">Depoimentos</h2>
        <p className="section-subtitle">Veja o que nossos pacientes e profissionais dizem sobre a MenteCare.</p>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">O que dizem nossos pacientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {patientTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-16 w-16 border-2 border-teal-300">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-center mb-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-teal-600">{testimonial.type}</p>
                  </div>
                  <div className="flex justify-center mb-4">{renderStars(testimonial.rating)}</div>
                  <p className="text-gray-600 text-center italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-center mb-8">O que dizem nossos profissionais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {professionalTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-16 w-16 border-2 border-teal-300">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-center mb-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-teal-600">{testimonial.type}</p>
                  </div>
                  <div className="flex justify-center mb-4">{renderStars(testimonial.rating)}</div>
                  <p className="text-gray-600 text-center italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}