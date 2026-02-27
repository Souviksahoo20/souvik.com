"use client"

import { useEffect, useRef } from "react"

type Props = {
  interval?: number
}

export default function AutoScroller({ interval = 7000 }: Props) {
  const idxRef = useRef(0)
  const timerRef = useRef<number | null>(null)
  const enabledRef = useRef<boolean>(true)

  useEffect(() => {
    // Set smooth scroll behavior on html element once
    document.documentElement.style.scrollBehavior = "smooth"

    const getSections = () => Array.from(document.querySelectorAll<HTMLElement>("section[id]"))

    const start = () => {
      stop()
      if (!enabledRef.current) return
      timerRef.current = window.setInterval(() => {
        const sections = getSections()
        if (!sections.length) return
        idxRef.current = (idxRef.current + 1) % sections.length
        sections[idxRef.current].scrollIntoView({ block: "start" })
      }, interval)
    }

    const stop = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }

    const applyPreference = () => {
      try {
        const raw = localStorage.getItem("autoScroll")
        // default to ON unless explicitly disabled
        enabledRef.current = raw === null ? true : raw === "true"
      } catch {
        enabledRef.current = true
      }
    }

    const onPrefChange = (e?: StorageEvent) => {
      if (e && e.key !== "autoScroll") return
      applyPreference()
      // restart/stop based on new pref
      if (enabledRef.current) start()
      else stop()
    }
    
    applyPreference()
    
    const onTouchStart = () => {
      // Disable auto-scroll on touch devices
      enabledRef.current = false
      stop()
      window.removeEventListener("touchstart", onTouchStart, { passive: true } as EventListenerOptions)
    }

    const onUserInteraction = () => {
      // stop autoplay on first wheel/keyboard interaction
      stop()
      window.removeEventListener("wheel", onUserInteraction)
      window.removeEventListener("keydown", onUserInteraction)
    }

    window.addEventListener("wheel", onUserInteraction, { passive: true })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("keydown", onUserInteraction)
    // listen for storage events (other tabs) and custom event
    window.addEventListener("storage", onPrefChange)
    window.addEventListener("autoscroll:change", onPrefChange as EventListener)

    const handleVisibilityChange = () => {
      if (document.hidden) stop()
      else if (enabledRef.current) start()
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    start()

    return () => {
      stop()
      document.documentElement.style.scrollBehavior = ""
      window.removeEventListener("wheel", onUserInteraction)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("keydown", onUserInteraction)
      window.removeEventListener("storage", onPrefChange)
      window.removeEventListener("autoscroll:change", onPrefChange as EventListener)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [interval])

  return null
}
