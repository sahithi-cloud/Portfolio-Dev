"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-vscodePanel border-t border-vscodeBorder text-vscodeText font-code py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-vscodeText/70">© {new Date().getFullYear()} Sahithi Balerao. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sahithi-cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-vscodeGreen transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sahithi-balerao29/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-vscodeGreen transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:baleraosahithi@gmail.com"
            className="hover:text-vscodeGreen transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
