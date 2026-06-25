import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from 'next/font/google'
import "./globals.scss"
import BootstrapClient from "@/components/BootstrapClient"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

// ─── GOOGLE FONTS ─────────────────────────────
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-title'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body'
})

export const metadata: Metadata = {
  title: "Perú Magic Travel",
  description: "Tours y viajes en Perú",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>
        <BootstrapClient />
        
        <Header />
        
        <main className="min-vh-100">{children}</main>
        
        <Footer />
      </body>
    </html>
  )
}