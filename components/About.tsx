"use client"

import { useEffect, useState, useRef } from "react"

export default function WhyMe() {
  const lines = [
    "Microsoft Windows [Version 10.0.22631.4890]",
    "(c) Microsoft Corporation. All rights reserved.",
    "",
    "> echo \"Reasons to hire Sahithi:\"",
    "",
    "✅ 1. Pixel-perfect Frontend Craftsmanship",
    "   └── React, TypeScript, and clean design patterns",
    "",
    "✅ 2. Full-Stack Engineering Mindset",
    "   └── MERN + OpenAI + RESTful APIs + CI/CD",
    "",
    "✅ 3. Strong UX + UI Eye",
    "   └── From Figma to Functional — I build what users love",
    "",
    "✅ 4. Reliable Collaborator",
    "   └── Communicates well with designers, PMs, and devs",
    "",
    "✅ 5. Code You'll Want to Maintain™",
    "   └── Scalable, documented, testable components",
    "",
    "> echo \"Let’s build something legendary.\" > contact.txt"
  ]

  const [displayedText, setDisplayedText] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [blinking, setBlinking] = useState(true)
  const [isStarted, setIsStarted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout

    if (isStarted && lineIndex < lines.length) {
      const currentLine = lines[lineIndex]

      if (charIndex === 0 && audioRef.current) {
        audioRef.current.loop = true
        audioRef.current.currentTime = 0.6
        audioRef.current.play()
      }

      if (charIndex < currentLine.length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentLine[charIndex])
          setCharIndex(charIndex + 1)
        }, 20)
      } else {
        setDisplayedText((prev) => prev + "\n")
        setLineIndex(lineIndex + 1)
        setCharIndex(0)
      }
    }

    if (isStarted && lineIndex === lines.length) {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }

    return () => clearTimeout(typingTimeout)
  }, [charIndex, lineIndex, isStarted])

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlinking((prev) => !prev), 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <section id="about" className="bg-vscodeBg text-vscodeText font-code py-20 px-4 sm:px-6 md:px-8 lg:px-10">
      <audio ref={audioRef} src="/sounds/Keystroke.mp3" preload="auto" />
      <div className="max-w-4xl mx-auto">
        <div className="bg-black rounded-md text-vscodeText shadow-lg border border-gray-700">
          <div className="text-sm bg-[#2d2d2d] text-white px-4 py-2 rounded-t-md font-semibold">
            Why hire Sahithi?
          </div>
          <pre className="text-sm whitespace-pre-wrap leading-relaxed px-4 py-4 min-h-[300px]">
          <span className="inline">{displayedText}</span>
    {/*      {blinking && isStarted && <span className="inline animate-blink">|</span>} */}
          </pre>


        </div>

        {!isStarted && (
          <div className="text-center mt-6">
            <button
              onClick={() => setIsStarted(true)}
              className="px-6 py-2 bg-vscodeGreen text-black font-semibold rounded hover:opacity-90 transition"
            >
              Start Terminal
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
