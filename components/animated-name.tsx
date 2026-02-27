"use client"

import { useEffect, useState } from "react"

type Props = {
  name: string
  speed?: number
  className?: string
}

export default function AnimatedName({ name, speed = 80, className = "" }: Props) {
  const [text, setText] = useState("")

  useEffect(() => {
    setText("")
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setText(name.slice(0, i))
      if (i >= name.length) {
        clearInterval(id)
      }
    }, speed)

    return () => clearInterval(id)
  }, [name, speed])

  return (
    <span className={className} aria-label={name}>
      <span className="text-[#c9d1d9]">"</span>
      <span className="bg-gradient-to-r from-[#58a6ff] via-[#a5a5ff] to-[#7ee787] bg-clip-text text-transparent font-bold">
        {text}
      </span>
      <span className="text-[#c9d1d9]">"</span>
      <span className="inline-block w-0.5 h-5 align-middle ml-2 bg-[#58a6ff] animate-pulse" aria-hidden />
    </span>
  )
}
