"use client"

import React, { ReactNode, useState } from "react"

interface LiquidGlassProps {
  children: ReactNode
  className?: string
  intensity?: "light" | "medium" | "strong"
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  className = "",
  intensity = "light",
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const getIntensityStyles = () => {
    const styles = {
      light: {
        background: "rgba(255, 255, 255, 0.08)",
        blur: "blur(16px)",
        border: "rgba(255, 255, 255, 0.15)",
        shadow: "0 4px 16px 0 rgba(0, 0, 0, 0.1)",
      },
      medium: {
        background: "rgba(255, 255, 255, 0.12)",
        blur: "blur(20px)",
        border: "rgba(255, 255, 255, 0.2)",
        shadow: "0 8px 32px 0 rgba(0, 0, 0, 0.12)",
      },
      strong: {
        background: "rgba(255, 255, 255, 0.18)",
        blur: "blur(24px)",
        border: "rgba(255, 255, 255, 0.25)",
        shadow: "0 12px 48px 0 rgba(0, 0, 0, 0.15)",
      },
    }
    return styles[intensity]
  }

  const currentIntensity = isHovered ? "strong" : intensity
  const styles = getIntensityStyles()

  return (
    <div
      className={`liquid-glass-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered
          ? "rgba(255, 255, 255, 0.18)"
          : styles.background,
        backdropFilter: isHovered ? "blur(24px)" : styles.blur,
        WebkitBackdropFilter: isHovered ? "blur(24px)" : styles.blur,
        border: `1px solid ${isHovered ? "rgba(255, 255, 255, 0.25)" : styles.border}`,
        boxShadow: isHovered
          ? "0 12px 48px 0 rgba(0, 0, 0, 0.15)"
          : styles.shadow,
        borderRadius: "38px",
        transform: "translateZ(0)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {children}
    </div>
  )
}

export default LiquidGlass
