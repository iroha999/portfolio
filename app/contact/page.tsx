"use client"

import { Card } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="container py-12 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-md mx-auto"
      >
        <Card className="border border-white/10 bg-black/40 p-8">
          <div className="flex items-center justify-center gap-4 text-xl">
            <Mail className="h-6 w-6 text-white/80" />
            <span>contact@example.com</span>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

