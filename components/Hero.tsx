'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, X, Mail, ArrowBigDown } from "lucide-react"
import twemoji from "twemoji"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Software Developer"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    twemoji.parse(document.body, {
      folder: "svg",
      ext: ".svg",
    })
  }, [text])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
  }

  return (
    <motion.section
      id="home"
      className="relative pt-28 pb-20 bg-vscodeBg text-vscodeText font-code flex flex-col items-center text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-vscodeBorder shadow-md mb-6">
        <img
          src="/profile.png"
          alt="Sahithi Balerao"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      
      <motion.h1
  className="text-3xl md:text-5xl font-bold mb-3"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
>
  <span className= "text-vscodeYellow">Hi, I'm </span>
  <span className="text-vscodeRed">Sahithi Balerao</span>
</motion.h1>

      {/* Role */}
      <h2 className="text-xl md:text-2xl text-vscodeBlue mb-4 h-6">
        {text}
        <span className="animate-pulse">|</span>
      </h2>

      {/* Short Bio */}
      <p className="text-vscodeYellow bg-[#252526] p-4 shadow-sm max-w-2xl mb-8 rounded text-sm md:text-base">
        I craft clean, performant code with a passion for seamless user experiences, modern aesthetics, and AI-integrated products.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <Button
          onClick={() => scrollToSection("projects")}
          className="bg-vscodeGreen text-[#1e1e1e] hover:scale-105 transition"
        >
          View Projects
        </Button>
        <Button
          onClick={() => scrollToSection("contact")}
          variant="outline"
          className="border border-vscodeText text-vscodeText hover:bg-vscodeText hover:text-vscodeBg transition hover:scale-105"
        >
          Contact Me
        </Button>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 mb-6">
        {[{
          icon: <Linkedin className="h-5 w-5" />,
          href: "https://www.linkedin.com/in/sahithi-balerao29/"
        }, {
          icon: <X className="h-5 w-5" />,
          href: "https://x.com/sahithibalerao"
        }, {
          icon: <Github className="h-5 w-5" />,
          href: "https://github.com/sahithi-cloud"
        }, {
          icon: <Mail className="h-5 w-5" />,
          href: "mailto:baleraosahithi@gmail.com"
        }].map(({ icon, href }, i) => (
          <Button
            key={i}
            variant="outline"
            size="icon"
            className="border border-vscodeText text-vscodeText hover:bg-vscodeText hover:text-vscodeBg hover:scale-105 transition"
            asChild
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </Button>
        ))}
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ArrowBigDown onClick={() => scrollToSection("about")} className="animate-bounce text-vscodeText cursor-pointer" />
      </div>
    </motion.section>
  )
}
