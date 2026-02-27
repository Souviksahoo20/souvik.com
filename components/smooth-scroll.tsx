"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Set smooth scroll behavior on html element once
    document.documentElement.style.scrollBehavior = "smooth"

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      if (!target) return

      // find closest anchor
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute("href") || ""
      if (!href.startsWith("#") || href === "#") return

      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ block: "start" })
        // update the hash without jumping
        history.replaceState(history.state, "", href)
      }
    }

    document.addEventListener("click", onClick)
    return () => {
      document.removeEventListener("click", onClick)
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return null
}
