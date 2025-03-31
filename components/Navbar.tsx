"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
  }

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "Why me?", href: "about" },
    { name: "Tech Stack", href: "tech-stack" },
    { name: "Experience", href: "experience" },
    { name: "Education", href: "education" },
    { name: "Projects", href: "projects" },
    { name: "AskmeAnything", href: "ask-me" },
    { name: "Contact", href: "contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 font-code",
        scrolled ? "bg-vscodeBg/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg font-semibold tracking-wide text-vscodeText hover:text-vscodeBlue transition-colors"
          >
            Sahithi Balerao
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-vscodeText hover:text-vscodeBlue transition-colors"
              >
                {link.name}
              </button>
            ))}

            <Button
              variant="ghost"
              className="text-sm text-vscodeGreen hover:text-vscodeText font-code px-4 py-2 transition-all"
              onClick={() => window.open('/SahithiBalerao_Resume.pdf', '_blank')}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-vscodeText"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-vscodeBg/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-base text-vscodeText hover:text-vscodeBlue text-left transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="ghost"
                className="text-base text-vscodeGreen hover:text-vscodeText font-code text-left px-0"
                onClick={() => window.open('/SahithiBalerao_Resume.pdf', '_blank')}
              >
                Resume
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
