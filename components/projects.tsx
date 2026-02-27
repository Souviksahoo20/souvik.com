"use client"

import { useEffect, useRef, useState } from "react"
import { Github, ExternalLink, Folder } from "lucide-react"

type Project = {
  title: string
  subtitle: string
  tech: string[]
  description: string
  role: string
  gradient: string
  githubUrl: string
  image?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: "Resume Analyzed By AI In Seconds",
    subtitle: "Check your resume ATS score",
    tech: ["AI Agents", "GIS", "Simulation", "Python"],
    description: `Get Your Resume Analyzed By AI In Seconds
  10x resume.co

  Web-based dashboard for instant Resume analytics`,
    role: "Lead AI Architect, simulation logic, and visualization pipeline",
    gradient: "from-[#58a6ff] to-[#7ee787]",
    githubUrl: "https://10xresume.co/#upload",
    liveUrl: "https://10xresume.co/#upload",
    image: "/Bharattrip ai.png",
  },
  {
    title: "Rare Rabbit Casual T-Shirts",
    subtitle: "Luxury Clothing Brand for Men",
    tech: ["CNN", "TensorFlow", "OpenCV"],
    description:
      "Production-ready deep learning model detecting facial emotions in real-time. Classifies 7 emotion categories using custom CNN.",
    role: "Model training, optimization, and deployment",
    gradient: "from-[#a5a5ff] to-[#58a6ff]",
    githubUrl: "https://github.com/Souviksahoo20",
    liveUrl: "Cj0KCQiAqeDMBhDcARIsAJEbU9ROBe4_FHCkoKQTKSRGDxcLAPTPFKmhJTRhBhxGIf9JL07N6Bf7fPIaAjLfEALw_wcB",
    image: "/facial emotion recognition.png",
  },
  {
    title: "GoCart",
    subtitle: "Gadgets you'll love. Prices you'll trust.",
    tech: ["Random Forest", "XGBoost", "Logistic Regression"],
    description:
      "ecommerce website",
    role: "E-commerce Developer - Full-stack development and implementation",
    gradient: "from-[#ff7ee7] to-[#a5a5ff]",
    githubUrl: "https://github.com/Souviksahoo20",
    liveUrl: "https://gocart-lac-two.vercel.app/",
    image: "/futureweatherprediction.png",
  },
  {
    title: "QuickCart",
    subtitle: "Instant shopping",
    tech: ["Firebase", "ML Recommendations", "Python"],
    description:
      "ecommerce website",
    role: ` Customer (User), Seller / Partner Store ,Delivery Partner (Rider), Admin (App Platform), Support / Customer Service, Inventory / Warehouse Manager, Finance / Billing Team
Optional Advanced Roles:
Marketing Manager
Analytics / Data Team
Quality Assurance / Testing Team`,

    gradient: "from-[#7ee787] to-[#a5a5ff]",
    githubUrl: "https://quick-cart-teal-eta.vercel.app/",
    liveUrl: "https://quick-cart-teal-eta.vercel.app/",
    image: "/rewear.png",
  },
  {
    title: "GameRise",
    subtitle: "AI-Driven Esports Ecosystem",
    tech: ["AI Agents", "ML Models", "Real-time Analytics", "Python", "WebRTC"],
    description:
      "Building an AI-driven esports ecosystem that provides intelligent matchmaking, performance analytics, real-time coaching, and automated tournament management for competitive gaming.",
    role: "Lead AI Developer - Building AI agents, ML models, and real-time analytics pipeline",
    gradient: "from-[#a5a5ff] to-[#58a6ff]",
    githubUrl: "https://github.com/Souviksahoo20",
    liveUrl: "https://github.com/Souviksahoo20",
    image: "/gamerise.png",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 sm:py-32 md:py-40 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-[#58a6ff]">const</span>{" "}
            <span className="text-[#79c0ff]">projects</span>{" "}
            <span className="text-[#58a6ff]">=</span>{" "}
            <span className="text-[#a5a5ff]">[</span>
          </h2>
          <p className={`text-lg text-[#8b949e] font-mono transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-[#58a6ff]">//</span> Featured AI projects and production systems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              role="link"
              tabIndex={0}
              onClick={() => window.open(project.githubUrl, "_self", "noopener,noreferrer")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  window.open(project.githubUrl, "_blank", "noopener,noreferrer")
                }
              }}
              className={`group bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden hover:border-[#58a6ff]/50 transition-all duration-700 hover:shadow-xl hover:shadow-[#58a6ff]/10 flex flex-col cursor-pointer ${
                isVisible 
                  ? "opacity-100 translate-y-0 scale-100 rotate-0" 
                  : "opacity-0 translate-y-12 scale-95 rotate-1"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Terminal Header */}
              <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Folder className={`w-4 h-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                  <span className="text-xs text-[#8b949e] font-mono">{project.title.toLowerCase().replace(/\s+/g, "-").replace(/🇮🇳/g, "")}</span>
                </div>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Live</span>
                  </a>
                ) : (
                  <a href={project.githubUrl} target="_self"  rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <Github className="w-4 h-4 text-[#8b949e] group-hover:text-[#58a6ff] transition-colors" />
                  </a>
                )}
              </div>

              {/* Project Image */}
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden bg-[#0a0d11] border-b border-[#30363d]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/80 via-transparent to-transparent pointer-events-none"></div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.title}
                </h3>
                <p className="text-sm text-[#8b949e] mb-4 font-mono">{project.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-[#1c2128] border border-[#30363d] text-[#8b949e] text-xs rounded font-mono hover:border-[#58a6ff]/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-[#c9d1d9] text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

                <div className="pt-4 border-t border-[#30363d] mt-auto">
                  <p className="text-xs font-mono">
                    <span className="text-[#58a6ff]">role:</span>{" "}
                    <span className="text-[#8b949e]">{project.role}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
