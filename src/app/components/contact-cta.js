import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Phone, Mail, Clock } from "lucide-react"

export default function ContactCTA() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos aqui para ajudar. Entre em contato conosco para agendar uma consulta ou tirar suas dúvidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-teal-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Envie-nos uma mensagem</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <Input id="name" placeholder="Seu nome completo" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" className="w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <Input id="phone" placeholder="(00) 00000-0000" className="w-full" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <Input id="subject" placeholder="Como podemos ajudar?" className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea id="message" placeholder="Descreva sua necessidade..." className="w-full min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full bg-teal-300 hover:bg-teal-400 text-white">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-teal-300 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Telefone</h4>
                    <p className="text-gray-600">+55 11 9999-8888</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-teal-300 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">contato@mentecare.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-teal-300 mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 20h</p>
                    <p className="text-gray-600">Sábado: 8h às 14h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-300 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Agende sua Consulta</h3>
              <p className="mb-6">
                Dê o primeiro passo para cuidar da sua saúde mental. Agende uma consulta com um de nossos especialistas.
              </p>
              <Button className="w-full bg-white text-teal-600 hover:bg-gray-100">Agendar Agora</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}