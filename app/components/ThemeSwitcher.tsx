"use client"

import { useEffect } from 'react'

// Color switcher removed — theme is locked to VyperBD Green
export default function ThemeSwitcher() {
  useEffect(() => {
    const root = document.documentElement
    const green = 'rgba(34, 197, 94, 1)'
    root.style.setProperty('--icon-primary', green)
    root.style.setProperty('--button-primary', 'rgba(22, 163, 74, 1)')
    root.style.setProperty('--text-secondary', green)
    root.style.setProperty('--icon-text-primary', green)
    root.style.setProperty('--hover-gradient', 'radial-gradient(50% 50% at 50% 100%, rgba(34, 197, 94, 0.2) 0%, transparent 100%)')
    root.style.setProperty('--border-secondary', 'rgba(34, 197, 94, 0.25)')
    root.style.setProperty('--card-primary', root.classList.contains('dark')
      ? 'rgba(34, 197, 94, 0.12)'
      : 'rgba(255, 255, 255, 1)')
    localStorage.setItem('theme-color', 'green')
  }, [])

  return null
}
