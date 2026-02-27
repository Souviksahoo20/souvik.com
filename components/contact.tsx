"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import emailjs from "emailjs-com"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Souviksahoo20",
    username: "Souviksahoo20",
    gradient: "from-[#2a2bf7] to-[#8b49ff]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/souvik-sahoo-00854927a/",
    username: "Connect on LinkedIn",
    gradient: "from-[#8b49ff] to-[#00b7ff]",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:souviksahoo2003@gmail.com",
    username: "souviksahoo2003@gmail.com",
    gradient: "from-[#00b7ff] to-[#2a2bf7]",
  },
]

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 md:py-40 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-[#58a6ff]">export</span>{" "}
            <span className="text-[#79c0ff]">contact</span>
            <span className="text-[#a5a5ff]">;</span>
          </h2>
          <p
            className={`text-lg text-[#8b949e] font-mono transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-[#58a6ff]">//</span> Open to collaborations,
            exciting AI projects, and innovative opportunities
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              rel="noopener noreferrer"
              className={`group bg-[#0d1117] border border-[#30363d] rounded-lg p-8 hover:border-[#58a6ff]/50 hover:bg-[#1c2128] transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-[#58a6ff]/10 text-center ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center gap-4">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">
                    {link.label}
                  </h3>
                  <p className="text-sm text-foreground/60 break-all group-hover:text-foreground/80 transition-colors">
                    {link.username}
                  </p>
                </div>
                <Send className="w-4 h-4 text-foreground/30 group-hover:text-[#00b7ff] transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div
          className={`max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              const target = e.target as HTMLFormElement
              const formData = new FormData(target)

              setStatus("")
              setIsSending(true)

              try {
                await emailjs.send(
                  "service_7sp0gqo",
                  "template_ztps89s",
                  {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    message: formData.get("message"),
                  },
                  "QvnkMUBEtSCpxH78l"
                )

                setStatus("Message sent — thank you!")
                target.reset()
              } catch (error) {
                setStatus("Failed to send message")
              } finally {
                setIsSending(false)
              }
            }}
            className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Your name"
                required
                className="px-4 py-3 bg-transparent border border-[#30363d] rounded-md"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="px-4 py-3 bg-transparent border border-[#30363d] rounded-md"
              />
            </div>
            <div className="mt-4">
              <textarea
                name="message"
                placeholder="Your message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-transparent border border-[#30363d] rounded-md"
              />
            </div>
            <div className="mt-4 flex items-center gap-4">
              <button
                type="submit"
                disabled={isSending}
                className="px-4 py-2 bg-[#238636] text-white rounded-md"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
              <div className="text-sm text-foreground/70">{status}</div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div
          className={`text-center text-sm text-foreground/50 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p>Copyright 2025 © 𝕊𝕆𝕌𝕍𝕀𝕂 All Right Reserved</p>
        </div>
      </div>
    </section>
  )
}
