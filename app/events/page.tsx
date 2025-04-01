"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CalendarDays, MapPin } from "lucide-react"

const events = [
  {
    id: 1,
    title: "ENOG83 Meeting 聴講参加",
    date: "2024年8月30日",
    location: "新潟",
    tags: ["ネットワーク", "インフラ", "セミナー"],
    url: "https://enog.jp/archives/2947", // URLを追加
  },
  {
    id: 2,
    title: "高校生ICTカンファレンス2024 ファシリテーター",
    date: "2024年8月8日",
    location: "新潟",
    tags: ["ICT", "ボランティア", "ワークショップ"],
    url: "https://www.ncc-net.ac.jp/blog/pickup/49686", // URLを追加
  }
]
export default function EventsPage() {
  return (
    <div className="container py-12 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight">Events Attended</h1>
      </motion.div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border border-white/10 bg-black/40 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {event.url ? (
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:underline no-underline"
                      >
                        {event.title}
                      </a>
                    ) : (
                      event.title
                    )}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-white/60">
                    <div className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4 text-white/80" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-white/80" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-white/20 text-white/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

