import { Inter, Poppins } from 'next/font/google';
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "MenteCare - Cuidados psicológicos para seu bem-estar",
  description: "Encontre o psicólogo certo para você e comece sua jornada de bem-estar mental",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-gray-50 text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}