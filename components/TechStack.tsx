// This will be a modular, styled, responsive VS Code-themed TechStack component
// Components: TechStack (main), TechCard, SkillBar, SkillRadarModal (already exists as SkillsRadar)

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Layout, Server, Database, Wrench, Binary, ActivitySquare } from "lucide-react"
import SkillsRadar from "@/components/skills-radar"
import { Button } from "./ui/button"

const categories = {
  languages: {
    icon: <Code2 className="h-5 w-5 text-vscodeBlue" />,
    title: "Programming Languages",
    skills: [
      { name: "C++", level: 90 },
      { name: "C", level: 55 },
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 88 },
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Ruby", level: 40 },
    ],
  },
  concepts: {
    icon: <Binary className="h-5 w-5 text-vscodeYellow" />,
    title: "Engineering Concepts",
    skills: [
      { name: "Data Structures", level: 95 },
      { name: "Algorithms", level: 90 },
      { name: "OOP", level: 95 },
      { name: "Design Patterns", level: 85 },
      { name: "System Design", level: 80 },
      { name: "Multithreading", level: 85 },
    ],
  },
  frontend: {
    icon: <Layout className="h-5 w-5 text-vscodePurple" />,
    title: "Full Stack",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux", level: 85 },
      { name: "Three.js", level: 75 },
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Spring Boot", level: 85 },
      { name: "Ruby on Rails", level: 80 },
    ],
  },
  backend: {
    icon: <Server className="h-5 w-5 text-vscodeRed" />,
    title: "Data Analytics",
    skills: [
      { name: "R", level: 85 },
      { name: "ETL", level: 80 },
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 85 },
      { name: "Google Analytics", level: 90 },
      { name: "Excel", level: 90 },
    ],
  },
  database: {
    icon: <Database className="h-5 w-5 text-vscodeGreen" />,
    title: "Database Systems",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Redis", level: 25 },
    ],
  },
  tools: {
    icon: <Wrench className="h-5 w-5 text-vscodeText" />,
    title: "Development Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 80 },
      { name: "Postman", level: 75 },
      { name: "Figma", level: 80 },
      { name: "Firebase", level: 95 },
      { name: "Wordpress", level: 95 },
      { name: "Adobe Illustrator", level: 75 },
      { name: "Visual Studio", level: 85 },
      { name: "Canva", level: 95 },
    ],
  },
}

export default function TechStack() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const [showRadar, setShowRadar] = useState<string | null>(null)

  return (
    <section id="tech-stack" className="bg-vscodeBg text-vscodeText font-code py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-vscodeBlue">
          // tech-stack.ts
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categories).map(([key, { icon, title, skills }]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1e1e1e] p-4 rounded-md border border-vscodeText/10 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  {icon}
                  <h3 className="text-lg font-semibold text-vscodeText">{title}</h3>
                </div>
                <Button
                  onClick={() => setShowRadar(key === showRadar ? null : key)}
                  className="hover:text-vscodeGreen"
                >
                  <ActivitySquare className="w-4 h-4" />
                </Button>
              </div>

              <AnimatePresence>
                {expanded === key ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="space-y-4"
                  >
                    {skills.map((skill, idx) => (
                      <div key={idx} className="text-sm">
                        <div className="flex justify-between">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-[#333] h-1.5 rounded-full">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: idx * 0.05 }}
                            className="h-1.5 rounded-full bg-vscodeBlue"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 3).map((s, i) => (
                      <span key={i} className="px-2 py-0.5 text-xs bg-vscodeBlue/10 text-vscodeText rounded">
                        {s.name}
                      </span>
                    ))}
                    {skills.length > 3 && (
                      <span className="text-xs text-vscodeText/60">+{skills.length - 3} more</span>
                    )}
                  </div>
                )}
              </AnimatePresence>

              <button
                className="mt-4 text-xs text-vscodeGreen hover:underline"
                onClick={() => setExpanded(expanded === key ? null : key)}
              >
                {expanded === key ? "Hide details" : "View details"}
              </button>

              {showRadar === key && (
                <SkillsRadar
                  skills={skills}
                  title={title}
                  onClose={() => setShowRadar(null)}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}