import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-300">MenteCare</h3>
            <p className="text-sm text-gray-300 mb-4">Cuidados psicológicos para seu bem-estar mental e emocional.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-teal-300 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-300 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-teal-300 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="#especialistas" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Especialistas
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Terapia Individual
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Terapia de Casal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Terapia Familiar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Avaliação Psicológica
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-300 transition-colors">
                  Orientação Vocacional
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-teal-300 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Av. Paulista, 1000, São Paulo - SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-teal-300 flex-shrink-0" />
                <span className="text-gray-300">+55 11 9999-8888</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-teal-300 flex-shrink-0" />
                <span className="text-gray-300">contato@mentecare.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} MenteCare. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}