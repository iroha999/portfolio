import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "About me",
  description: "Genki Gonpei - Software Engineer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="text-[#000080] font-mono">
        {children}
      </body>
    </html>
  )
}