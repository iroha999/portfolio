"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Html } from "next/document"

const works = [
  {
    id: 1,
    title: "架空の企業HPの開発",
    image: "/image.png", 
    tags: ["個人開発", "Webサイト開発", "HTML/CSS/JS"],
    githubUrl: "",
    liveUrl: "https://iroha999.github.io/iroha999-company.github.io/index.html",
  },
  {
    id: 2,
    title: "新潟デジコングランプリ2024 一般 アプリの部 入選",
    image: "/RAivS.png", // 適切な画像パスに変更してください
    tags: ["チーム開発", "Webアプリケーション", "コンテスト"],
    githubUrl: "",
    liveUrl: "https://www.youtube.com/watch?v=Ujs7C0KRhaI&ab_channel=%E3%81%AB%E3%81%84%E3%81%8C%E3%81%9F%E3%83%87%E3%82%B8%E3%82%B3%E3%83%B3",
  },
  {
    id: 3,
    title: "MBSD CyberSecurityChallenges 2024 第６位",
    image: "/image2.png", // 適切な画像パスに変更してください
    tags: ["セキュリティ", "コンテスト", "チーム開発"],
    githubUrl: "",
    liveUrl: "https://mbsdcc2024-view.pages.dev/",
    description: "チーム名: 電子遊戯部（１）.exe",
  },
  {
    id: 4,
    title: "学科内AIハッカソン 優勝",
    image: "/image3.png", // 適切な画像パスに変更してください
    tags: ["AI", "ハッカソン", "チーム開発"],
    githubUrl: "",
    liveUrl: "https://code.ncc.onl/",
    description: "作品名: 『CodeBlanc』 / チーム名: taiyaki custard",
  },
] 

export default function WorksPage() {
  return (
    <div className="container py-12 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight">Works</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {works.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border border-white/10 bg-black/40 h-full flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-4">{work.title}</h3>
                {work.description && (
                  <p className="text-sm text-white/60 mb-4">{work.description}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-white/20 text-white/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  {work.githubUrl && (
                    <Button variant="outline" size="sm" asChild className="border-white/20 hover:bg-white/5">
                      <a href={work.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {work.liveUrl && (
                    <Button size="sm" asChild variant="outline" className="border-white/20 hover:bg-white/5">
                      <a href={work.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        サイト
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

