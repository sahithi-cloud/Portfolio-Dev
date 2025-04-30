"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Layout, Server, Database, Wrench, Binary, ActivitySquare } from "lucide-react"
import SkillsRadar from "./skills-radar"
import Image from "next/image"

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showRadar, setShowRadar] = useState<string | null>(null)

  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Programming Languages",
      description: "Core languages for systems and application development",
      skills: [
        { name: "C++", level: 90, image: "/C++.png" },
        { name: "JavaScript", level: 90, image: "/JavaScript.png" },
        { name: "Java", level: 88, image: "/Java.png" },
        { name: "Python", level: 95, image: "/Python.png" },
        { name: "TypeScript", level: 90, image: "/Typescript.png" },
      ],
    },
    concepts: {
      icon: <Binary className="h-6 w-6" />,
      title: "Engineering Concepts",
      description: "Fundamental software engineering principles",
      skills: [
        { name: "Data Structures", level: 95, image: "/dsa.png" },
        { name: "OOP", level: 95, image: "/oop.png" },
        { name: "Multithreading", level: 85, image: "/multi.png" },
      ],
    },
    frontend: {
      icon: <Layout className="h-6 w-6" />,
      title: "Full Stack",
      description: "Modern web development technologies",
      skills: [
        { name: "React", level: 90, image: "/React.png" },
        { name: "Next.js", level: 85, image: "/Next.js.png" },
        { name: "HTML5", level: 95, image: "/HTML5.png" },
        { name: "CSS3", level: 95, image: "/CSS3.png" },
        { name: "Tailwind", level: 95, image: "/Tailwind CSS.png" },
        { name: "Redux", level: 85, image: "/Redux.png" },
        { name: "Three.js", level: 75, image: "/Three.js.png" },
        { name: "Node.js", level: 85, image: "/Node.js.png" },
        { name: "Express", level: 80, image: "/Express.png" },
      ],
    },
    backend: {
      icon: <Server className="h-6 w-6" />,
      title: "Data Analytics",
      description: "Server-side frameworks and technologies",
      skills: [
        { name: "R", level: 85, image: "/R.png" },
        { name: "ETL", level: 80, image: "/ETL.png" },
        { name: "Power BI", level: 90, image: "/powerbi.png" },
        { name: "Tableau", level: 85, image: "/Tableau.png" },
        { name: "Google Analytics", level: 90, image: "/GoogleA.png" },
        { name: "Excel", level: 90, image: "/Excel.png" },
      ],
    },
    database: {
      icon: <Database className="h-6 w-6" />,
      title: "Database Systems",
      description: "Database management and optimization",
      skills: [
        { name: "MongoDB", level: 85, image: "/MongoDB.png" },
        { name: "PostgreSQL", level: 80, image: "/PostgresSQL.png" },
        { name: "SQL", level: 75, image: "/SQL Developer.png" },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Development Tools",
      description: "Tools and environments for development",
      skills: [
        { name: "Git", level: 90, image: "/Git.png" },
        { name: "Docker", level: 80, image: "/Docker.png" },
        {name : "Github", level: 90, image: "/GitHub.png"},
        { name: "AWS", level: 80, image: "/Aws.png" },
        { name: "Postman", level: 75, image: "/Postman.png" },
        { name: "Figma", level: 80, image: "/Figma.png" },
        { name: "Firebase", level: 95, image: "/Firebase.png" },
        { name: "WordPress", level: 95, image: "/Wordpress.png" },
        { name: "Adobe Illustrator", level: 75, image: "/Adobe Illustrator.png" },
        { name: "Canva", level: 95, image: "/Canva.png" },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Skills</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg relative ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute top-4 right-4 h-7 px-3 rounded-full text-xs z-10 hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowRadar(showRadar === key ? null : key)
                  }}
                >
                  <ActivitySquare className="h-4 w-4" />
                </Button>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="flex flex-wrap justify-start gap-4">
                          {category.skills.map((skill, i) => (
                            <div key={i} className="flex flex-col items-center w-20">
                              <Image
                                src={skill.image!}
                                alt={skill.name}
                                width={40}
                                height={40}
                                className="rounded mb-1 transition-transform duration-300 ease-in-out hover:scale-125"
                              />
                              <span className="text-xs sm:text-sm text-center font-medium">
                                {skill.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, i) => (
                        <Badge key={i} variant="secondary">{skill.name}</Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary">
                          +{category.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>

                <AnimatePresence>
                  {showRadar === key && (
                    <SkillsRadar
                      skills={category.skills.filter((s): s is { name: string; level: number; image:null } => "level" in s)}
                      title={category.title}
                      onClose={() => setShowRadar(null)}
                    />
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
        </motion.div>
      </div>
    </section>
  )
}