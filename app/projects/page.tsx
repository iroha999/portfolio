"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "ポートフォリオサイト",
    description:
      "Next.jsとTailwind CSSを使用して作成した個人ポートフォリオサイト。レスポンシブデザインとアニメーションを実装。",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/iroha999/portfolio",
    liveUrl: "https://iroha999.github.io/",
  },
  {
    id: 2,
    title: "タスク管理アプリ",
    description:
      "Reactを使用したタスク管理アプリケーション。ドラッグ＆ドロップ機能、フィルタリング、ソート機能を実装。",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "JavaScript", "CSS", "LocalStorage"],
    githubUrl: "https://github.com/iroha999/task-manager",
    liveUrl: "https://iroha999.github.io/task-manager/",
  },
  {
    id: 3,
    title: "天気予報アプリ",
    description:
      "OpenWeather APIを使用した天気予報アプリ。位置情報の取得、5日間の予報表示、グラフによる気温変化の可視化。",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    githubUrl: "https://github.com/iroha999/weather-app",
    liveUrl: "https://iroha999.github.io/weather-app/",
  },
  {
    id: 4,
    title: "ECサイトのUI設計",
    description: "オンラインショッピングサイトのUIデザイン。ユーザビリティを考慮したレスポンシブデザイン。",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Figma", "UI/UX", "デザイン"],
    githubUrl: "",
    liveUrl: "",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-12 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight">プロジェクト</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          これまでに手がけたプロジェクトの一部をご紹介します。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="overflow-hidden border border-border/50 h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="flex gap-2 mt-auto">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              サイトを見る
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

