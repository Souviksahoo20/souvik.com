"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Achievements } from "@/components/achievements"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

const ShaderGradientCanvas = dynamic(
  () => import("@shadergradient/react").then((m) => m.ShaderGradientCanvas),
  { ssr: false }
)

const ShaderGradient = dynamic(
  () => import("@shadergradient/react").then((m) => m.ShaderGradient),
  { ssr: false }
)

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background */}
      {mounted && (
        <div className="fixed inset-0 z-0">
          <ShaderGradientCanvas className="absolute inset-0">
            <ShaderGradient
              animate="on"
              axesHelper="off"
              bgColor1="#000000"
              bgColor2="#000000"
              brightness={0.1}
              cAzimuthAngle={270}
              cDistance={0.5}
              cPolarAngle={180}
              cameraZoom={13.39}
              color1="#a3eefb"
              color2="#80f4ff"
              color3="#d4f8f9"
              destination="onCanvas"
              envPreset="city"
              fov={40}
              frameRate={10}
              grain="off"
              lightType="env"
              pixelDensity={1}
              positionX={-0.1}
              positionY={0}
              positionZ={0}
              reflection={0.7}
              rotationX={0}
              rotationY={130}
              rotationZ={70}
              shader="defaults"
              type="sphere"
              uAmplitude={3.2}
              uDensity={0.8}
              uFrequency={5.5}
              uSpeed={0.4}
              uStrength={0.3}
              wireframe={false}
            />
          </ShaderGradientCanvas>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </div>
    </main>
  )
}
