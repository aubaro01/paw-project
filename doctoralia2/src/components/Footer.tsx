import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Doctoralia</h3>
            <p className="text-sm">Encontre o médico certo para você</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Para pacientes</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Pesquisar médicos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Marcar consultas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Perguntas e respostas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Para profissionais</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Criar perfil
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Gestão de consultas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Planos e preços
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p className="text-sm">support@doctoralia.com</p>
            <p className="text-sm">+351 123 456 789</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Doctoralia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

