"use client"

import { useState, useEffect } from "react"

interface LoadingScreenProps {
  onLoadingComplete?: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // ローディング中はスクロールを無効化
    if (isVisible) {
      document.body.style.overflow = "hidden"
    }

    const handleLoad = () => {
      // すべてのリソースが読み込まれたら、フェードアウト開始
      setTimeout(() => {
        setIsFading(true)
        setTimeout(() => {
          setIsVisible(false)
          document.body.style.overflow = ""
          onLoadingComplete?.()
        }, 1200) // フェードアウトアニメーションの時間（1.2秒）
      }, 500) // 最低表示時間
    }

    // 既に読み込み完了している場合
    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-all ease-out ${
        isFading ? "opacity-0 blur-sm scale-105" : "opacity-100 blur-0 scale-100"
      }`}
      style={{ transitionDuration: "1.2s" }}
    >
      <div className="flex items-center gap-1">
        <p className="text-black text-xl md:text-2xl font-mono tracking-wider">
          now loading
        </p>
        <span className="loading-dot w-1.5 h-1.5 bg-black rounded-full animate-bounce-soft" style={{ animationDelay: "0ms" }} />
        <span className="loading-dot w-1.5 h-1.5 bg-black rounded-full animate-bounce-soft" style={{ animationDelay: "150ms" }} />
        <span className="loading-dot w-1.5 h-1.5 bg-black rounded-full animate-bounce-soft" style={{ animationDelay: "300ms" }} />
        <span className="loading-dot w-1.5 h-1.5 bg-black rounded-full animate-bounce-soft" style={{ animationDelay: "450ms" }} />
      </div>
    </div>
  )
}
