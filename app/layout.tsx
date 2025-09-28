import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Sizwan Pharma - Trusted Medicines, Affordable Prices",
  description:
    "Your reliable pharmaceutical partner providing quality medicines and healthcare solutions across India. Licensed distributor with 15+ years of experience.",
  keywords: "pharmaceutical, medicines, healthcare, medical supplies, pharmacy, India",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
