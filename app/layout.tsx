import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "ATMACA HAFRİYAT - İnşaat ve Hafriyat Hizmetleri v2.0",
  description:
    "Profesyonel hafriyat, inşaat desteği, arazi düzenleme ve moloz kaldırma hizmetleri. Güvenilir ve kaliteli çözümler için Atmaca Hafriyat.",
  keywords: "hafriyat, inşaat, moloz kaldırma, arazi düzenleme, excavation, construction",
  authors: [{ name: "ATMACA HAFRİYAT" }],
  generator: 'v0.app'
}

// Viewport'u ayrı export edin:
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans ${dmSans.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}