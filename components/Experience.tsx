"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ExperienceItem {
  company: string
  role: string
  date: string
  description: string
  techStack: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "Tandem Digital",
    role: "UI Developer",
    date: "Feb 2023 - Jul 2023",
    description:
      "Refactored modular web and mobile UI components for the UAE-based Fluid Finance project using React.js, Tailwind CSS, and TypeScript, increasing user satisfaction by 20% and engagement by 25%. Collaborated with designers and developers to convert Figma mockups into fully responsive interactive prototypes, reducing design-to-development turnaround by 15%. Additionally, conducted A/B testing, implemented lazy loading, and optimized frontend performance, resulting in a 30% improvement in core user experience metrics.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
  },
  {
    company: "Next Enti",
    role: "Co-Founder & Technical Lead",
    date: "Present",
    description:
      "Co-founded and led as the Application developer of an innovative SaaS platform.",
    techStack: ["React", "Python", "LLM", "Postman", "Firebase", "Render", "MUI"],
  },
]

export default function Experience() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-20 bg-vscodeBg text-vscodeText font-code">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-xs tracking-wide uppercase">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-vscodeBlue mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-vscodeGreen mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="border border-vscodeBorder bg-vscodePanel text-vscodeText">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 overflow-hidden bg-vscodeBlue/10 flex items-center justify-center rounded-sm">
                          <img
                            src={
                              exp.company === "Tandem Digital"
                                ? "/Tandem.jpeg"
                                : exp.company === "Next Enti"
                                ? "/logot.png"
                                : "/placeholder.png"
                            }
                            alt={`${exp.company} Logo`}
                            className="w-14 h-14 object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-vscodeText">
                            {exp.company}
                          </h3>
                          <p
                            className={`text-sm ${
                              exp.company === "Next Enti"
                                ? "text-vscodePurple"
                                : "text-vscodeText/70"
                            }`}
                          >
                            {exp.role}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-vscodeText/50 whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-sm text-vscodeText/80 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-vscodeGreen/10 text-vscodeGreen text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
