"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"
import { Project, ProjectCategory, categories, projects } from "@/data/projectsdata"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("Software Development")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-vscodeBg text-vscodeText font-code">
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
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-vscodeBlue mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-vscodeGreen mx-auto"></div>
        </motion.div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 font-code text-sm ${
                selectedCategory === category
                  ? "bg-vscodeBlue text-vscodePanel hover:bg-vscodeBlue/90"
                  : "hover:bg-vscodeBlue/10 text-vscodeText border border-vscodeBorder"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects[selectedCategory]?.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg relative bg-vscodePanel border border-vscodeBorder text-vscodeText ${
                  expandedProject === project.id ? "ring-2 ring-vscodeGreen" : ""
                } ${
                  project.title === "Next Enti" 
                    ? "border-2 border-purple-500 rounded-sm" 
                    : "rounded-sm"
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                {project.title === "Next Enti" && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="bg-purple-500 text-white hover:bg-purple-600 rounded-full px-4 py-1">
                      Co-Founder
                    </Badge>
                  </div>
                )}
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.jpg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 p-6 flex flex-col justify-end">
                      <div className="bg-black/60 rounded px-3 py-2">
                        <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                        <p className="text-vscodeText/80 text-sm">{project.description}</p>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t border-vscodeBorder"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag: string, i: number) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-vscodeText/80 space-y-1">
                              {project.features.map((feature: string, i: number) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" /> Code
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" /> Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-vscodePanel text-vscodeText border border-vscodeBorder">
          <DialogHeader>
            <DialogTitle className="text-vscodeBlue">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-vscodeText/70">{selectedProject?.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {selectedProject?.tags.map((tag: string, i: number) => (
                <Badge key={i} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-vscodeText/80">{selectedProject?.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
