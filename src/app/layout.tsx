import type React from "react"
import type { Metadata } from "next"
import { Inconsolata } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inconsolata",
})

export const metadata: Metadata = {
  title: "Muhammad Hafizha Dhiyaulhaq - Portfolio",
  description: "Full Stack Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inconsolata.variable} font-inconsolata`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
