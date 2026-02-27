"use client";

import {
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import AnimatedName from "@/components/animated-name";
import Image from "next/image";

const terminalLines = [
  { text: "$ whoami", delay: 0 },
  { text: "souvik-sahoo", delay: 500 },
  { text: "$ cat about.txt", delay: 1000 },
  { text: "AI Developer | Generative AI Engineer", delay: 1500 },
  { text: "Google Developer Groups Winner 🚀", delay: 2000 },
  { text: "$ ls skills/", delay: 2500 },
  { text: "python  tensorflow  langchain  pytorch  docker", delay: 3000 },
];

export function Hero() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const line = terminalLines[currentLineIndex];
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line.text]);
        setCurrentLineIndex((prev) => prev + 1);
      }, line.delay);

      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/SouvikSahoo.pdf";
    link.download = "SouvikSahoo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto z-10 relative w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* LEFT TERMINAL */}
          <div
            className={`order-2 lg:order-1 w-full lg:w-5/12 transition-all duration-1000 ${
              displayedLines.length > 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <Terminal className="w-4 h-4 text-[#8b949e]" />
                  <span className="text-xs text-[#8b949e] font-mono">
                    terminal
                  </span>
                </div>
              </div>

              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  {displayedLines.map((line, index) => (
                    <div key={index} className="flex items-start gap-2">
                      {line.startsWith("$") ? (
                        <>
                          <span className="text-[#58a6ff]">→</span>
                          <span className="text-[#7ee787]">{line}</span>
                        </>
                      ) : (
                        <span className="text-[#c9d1d9] ml-6">{line}</span>
                      )}
                    </div>
                  ))}

                  {currentLineIndex < terminalLines.length && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#58a6ff]">→</span>
                      <span
                        className={`inline-block w-2 h-4 bg-[#58a6ff] ${
                          showCursor ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className={`order-1 lg:order-2 w-full lg:w-7/12 transition-all duration-1000 delay-300 ${
              displayedLines.length > 2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-6">
              
              {/* LOGO SECTION */}
              <div className="flex justify-center lg:justify-start mb-6 lg:-ml-6">
                <div className="relative flex items-center justify-center w-[190px] h-[190px]">
                  {/* Inner Logo */}
                  <Image
                    src="/icon-dark-32x32.png"
                    alt="logo"
                    width={80}
                    height={80}
                    priority
                    className="absolute z-10 drop-shadow-[0_0_20px_rgba(88,166,255,0.5)]"
                  />
                  {/* Outer Fire GIF */}
                  <Image
                    src="/image.gif"
                    alt="fire-ring"
                    width={190}
                    height={190}
                    priority
                    className="absolute z-20 drop-shadow-[0_0_20px_rgba(88,166,255,0.5)] pointer-events-none"
                  />
                </div>
              </div>

              {/* TITLE */}
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
                  const <span className="text-[#79c0ff]">developer</span> ={" "}
                  <span className="text-[#a5a5ff]">{"{"}</span>
                </h1>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
                  <span className="text-[#7ee787]">name:</span>{" "}
                  <AnimatedName name="SOUVIK SAHOO" speed={35} />
                </h1>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
                  <span className="text-[#a5a5ff]">{"}"}</span>
                </h1>
              </div>

              {/* DESCRIPTION */}
              <p className="text-xl sm:text-2xl text-[#8b949e] font-mono">
                <span className="text-[#58a6ff]">//</span> Software Engineer
                skilled in Full-Stack Development, Machine Learning, and
                IoT-based intelligent systems.
              </p>
              
              <div className="resume flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-black animate-bounce ml-2"></div>
                <Button
                  size="lg"
                  onClick={downloadResume}
                  className="bg-[#238636] text-white"
                >
                  Resume
                </Button>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={scrollToAbout}
                  className="bg-[#238636] text-white"
                >
                  view_projects <ArrowDown className="ml-2 w-4 h-4" />
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">contact_me</a>
                </Button>
              </div>

              {/* SOCIAL */}
              <div className="flex gap-6 pt-4">
                <a href="mailto:souviksahoo2003@gmail.com">
                  <Mail />
                </a>
                <a href="https://github.com/Souviksahoo20">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/souvik-sahoo-00854927a/">
                  <Linkedin />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}