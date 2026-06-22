import type { Metadata } from "next"
import "./globals.scss"
import BootstrapClient from "@/components/BootstrapClient"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Apunexa Travel",
  description: "Tours y viajes en Perú",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <BootstrapClient />
        
        {/* Ahora funciona solo, sin pasarle ninguna prop */}
        <Header />
        
        <main className="min-vh-100">{children}</main>
        
        <Footer />
      </body>
    </html>
  )
}