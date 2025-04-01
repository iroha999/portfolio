"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Briefcase, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaLinux } from "react-icons/fa";
import { SiSharp as SiCsharp, SiTypescript } from "react-icons/si";


export default function Home() {
  return (
    <div className="container py-12 md:py-24 space-y-16">
      <section className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Genki Gonpei</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10">
            <img
              src="/gonpei.png"
              alt="Genki Gonpei"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            asChild
            variant="outline"
            size="icon"
            className="border-white/20 hover:bg-white/5 w-12 h-12 rounded-full"
          >
            <Link href="/works" aria-label="Works">
              <Briefcase className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="icon"
            className="border-white/20 hover:bg-white/5 w-12 h-12 rounded-full"
          >
            <a href="https://github.com/iroha999" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-center mb-8"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-lg leading-relaxed"
        >
          <p>Hi, I'm Gonpei Genki. I'm majoring in cyber security.</p>
          <p>I am a student at Niigata Computer College.</p>
        </motion.div>
      </section>
      <section className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight text-center mb-8"
      >
        Technical Skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="bg-black/40 border border-white/10 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <FaHtml5 className="text-white/80 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold">HTML</h3>
        </Card>
        <Card className="bg-black/40 border border-white/10 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <FaCss3Alt className="text-white/80 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold">CSS</h3>
        </Card>
        <Card className="bg-black/40 border border-white/10 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <SiCsharp className="text-white/80 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold">C#</h3>
        </Card>
        <Card className="bg-black/40 border border-white/10 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <FaReact className="text-white/80 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold">React</h3>
        </Card>
        <Card className="bg-black/40 border border-white/10 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <SiTypescript className="text-white/80 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold">TypeScript</h3>
        </Card>
        <Card className="bg-black/40 border border-white/10 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <FaLinux className="text-white/80 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold">Linux</h3>
        </Card>
      </motion.div>
    </section>
    </div>
  )
}

