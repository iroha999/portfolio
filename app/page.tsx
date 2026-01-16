"use client"

import { useState } from "react"
import { Github, Briefcase, BookOpen, Mail, ArrowRight } from "lucide-react"
import { LiquidGlass } from "@/components/LiquidGlass"
import { LoadingScreen } from "@/components/LoadingScreen"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Loading Screen */}
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/samuel-ferrara-1527pjeb6jg-unsplash.jpg')" }}
      />
      {/* Overlay for better text readability */}
      <div className="fixed inset-0 bg-black/20" />

      <main className="flex-1 flex items-center px-8 md:px-16 lg:px-24 relative z-10">
        <div className="space-y-10">
          {/* Avatar */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl shadow-[#000080]/15 animate-fade-in-up animate-float">
            <img
              src="/gonpei.png"
              alt="Genki Gonpei"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <div className="space-y-3 animate-fade-in-up animate-delay-100">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
              Genki Gonpei
            </h1>
            <p className="text-white/80 text-lg md:text-xl drop-shadow-md">
              Junior Engineer
            </p>
          </div>

          {/* Links */}
          <LiquidGlass intensity="medium" className="p-6 animate-fade-in-up animate-delay-200">
            <nav className="flex flex-col gap-3">
              <a
                href="https://github.com/iroha999"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-2 text-white/80 hover:text-white transition-all"
              >
                <Github className="h-5 w-5" />
                <span className="text-lg">GitHub</span>
                <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a
                href="https://www.wantedly.com/id/iroha999"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-2 text-white/80 hover:text-white transition-all"
              >
                <Briefcase className="h-5 w-5" />
                <span className="text-lg">Wantedly</span>
                <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <div className="flex items-center gap-4 py-2 text-white/40">
                <Mail className="h-5 w-5" />
                <span className="text-lg">Contact</span>
                <span className="text-xs border border-white/30 rounded px-2 py-0.5">coming soon</span>
              </div>
            </nav>
          </LiquidGlass>
        </div>
      </main>

      <footer className="px-8 md:px-16 lg:px-24 py-6 text-white/60 text-sm animate-fade-in-up animate-delay-300 relative z-10">
        © 2026 Genki Gonpei
      </footer>
    </div>
  )
}

