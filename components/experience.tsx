"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

const experiences = [
    {
    icon: Briefcase,
    title: "RT Network Solutions Pvt.Ltd.",
    company: "iMerit Technology",
    period: "2 Feb 2026",
    description: `Key Achievements:
- Data processing & analytics
- Software development
- Logical problem solving
- Learning industry-level workflows
- Aspiring Software Engineer | Data & Problem-Solving Enthusiast`,
    color: "text-[#7ee787]",
  },
  {
    icon: Briefcase,
    title: "Frontend Developer Intern",
    company: "Razorpay India",
    period: "Sept – Oct 2025",
    description: `Key Achievements:
- Built a scalable frontend application using React.js and JavaScript (ES6+)
- Designed reusable component-based UI architecture
- Integrated REST APIs for dynamic problem rendering
- Optimized rendering using React Hooks, improving performance by 30%
- Ensured responsive design and cross-browser compatibility`,
    color: "text-[#7ee787]",
  },
  {
    icon: Briefcase,
    title: "Freelance - The House of Rare",
    company: "Rare Rabbit",
    period: "Jul – Aug 2025",
    description: `I helped build core features of the Jobs247 platform and contributed to frontend performance improvements.

Key Achievements:
- Designed and developed an interactive sales dashboard improving reporting efficiency by 20%
- Built and deployed a product management system with advanced data visualization tools.`,
    color: "text-[#7ee787]",
  },
  {
    icon: Briefcase,
    title: "Freelance — Asryn [GENCO]",
    company: "Freelancing Project",
    period: "Sep 2025",
    description: `Developed comprehensive machine learning solutions with end-to-end pipeline implementation.

Key Achievements:
- Developed a two-sided platform for Educators and Students using the MERN stack with Redux for state management
- Allowed educators to create courses by uploading title, thumbnail, and video content
- Enabled students to access free courses directly and paid courses after secure Razorpay payment.`,
    color: "text-[#58a6ff]",
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Technology in Computer Science and Engineering",
    company: "Sister Nivedita University",
    period: "2022 – 2026",
    description: `CGPA 8.76

Key Achievements:
- Smart India Hackathon (Top Team)
- Oscillation Hackathon (Finalist)
- Research Projects: Driver Fatigue Detection, Smart Irrigation
- Sports: Basketball & Tug of War Team
- Technical Skills: MEAN/MERN Stacks, APIs, Python, Java, JS/TS
- Leadership: SIH Team Lead, Discipline Incharge (Zephyr Fest)
- Social Impact: Teaching underprivileged children`,
    color: "text-[#a5a5ff]",
  },
  {
    icon: GraduationCap,
    title: "Higher Secondary Certificate (HS)",
    company: "Dariala Bhim Charan High School",
    period: "2021 – 2022",
    description: "Prepared for engineering studies with a focus on science and mathematics.",
    color: "text-[#a5a5ff]",
  },
  {
    icon: GraduationCap,
    title: "High School (HS)",
    company: "Kolaghat Thermal Power Plant High School",
    period: "2019 – 2020",
    description: "Completed foundational education under the WBBSE curriculum.",
    color: "text-[#a5a5ff]",
  },
]
export function Experience() {
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
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 sm:py-32 md:py-40 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-[#58a6ff]">const</span>{" "}
            <span className="text-[#79c0ff]">experience</span>{" "}
            <span className="text-[#58a6ff]">=</span>{" "}
            <span className="text-[#a5a5ff]">[</span>
          </h2>
          <p className={`text-lg text-[#8b949e] font-mono transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-[#58a6ff]">//</span> Roles, education, and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon
            return (
              <div
                key={idx}
                className={`group bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden hover:border-[#58a6ff]/50 transition-all duration-700 flex flex-col p-6 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className={`w-8 h-8 ${exp.color}`} />
                  <div>
                    <h3 className="text-lg font-bold">{exp.title}</h3>
                    <p className="text-sm text-[#8b949e] font-mono">{exp.company} • {exp.period}</p>
                  </div>
                </div>

                <p className="text-sm text-[#c9d1d9] leading-relaxed whitespace-pre-line flex-grow">{exp.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
