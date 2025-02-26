import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  const benefits = [
    "Profissionais qualificados e experientes",
    "Abordagem personalizada para cada paciente",
    "Ambiente acolhedor e confidencial",
    "Flexibilidade de horários",
    "Atendimento presencial e online",
  ]

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Sobre a MenteCare</h2>
          <p className="section-subtitle">
            Somos uma clínica especializada em saúde mental, comprometida em oferecer cuidados psicológicos de qualidade
            para promover o bem-estar emocional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-100 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-200 rounded-full z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Clínica MenteCare"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Nossa Missão</h3>
            <p className="text-gray-600">
              Na MenteCare, acreditamos que a saúde mental é tão importante quanto a saúde física. Nossa missão é
              proporcionar um espaço seguro e acolhedor onde as pessoas possam receber o suporte necessário para superar
              desafios emocionais e psicológicos.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 pt-4">Por que nos escolher?</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-300 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}