import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctoralia - Encontre o médico certo para você",
  description: "Plataforma de agendamento de consultas médicas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}