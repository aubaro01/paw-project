import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Brain, Users, Heart, Sparkles, Clock, Video } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Terapia Individual",
      description: "Atendimento personalizado para ajudar no autoconhecimento e superação de desafios emocionais.",
      icon: Brain,
    },
    {
      title: "Terapia de Casal",
      description: "Auxílio para melhorar a comunicação e resolver conflitos no relacionamento.",
      icon: Heart,
    },
    {
      title: "Terapia Familiar",
      description: "Abordagem sistêmica para melhorar a dinâmica e os relacionamentos familiares.",
      icon: Users,
    },
    {
      title: "Orientação Vocacional",
      description: "Apoio na descoberta de talentos e escolha de carreira alinhada com seus valores.",
      icon: Sparkles,
    },
    {
      title: "Consultas Flexíveis",
      description: "Horários adaptados à sua rotina, incluindo noites e fins de semana.",
      icon: Clock,
    },
    {
      title: "Atendimento Online",
      description: "Sessões de terapia por videochamada com a mesma qualidade do atendimento presencial.",
      icon: Video,
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Oferecemos uma variedade de serviços psicológicos para atender às suas necessidades específicas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-teal-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}