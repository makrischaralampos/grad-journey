"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const next = resolvedTheme === "dark" ? "light" : "dark"
  return (
    <Button variant="outline" onClick={() => setTheme(next)} aria-label="Toggle theme">
      {resolvedTheme === "dark" ? "☀️" : "🌙"}
    </Button>
  )
}
