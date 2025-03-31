"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.")
      return
    }
    setLoading(true)

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success("Your message has been sent! 🚀")
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast.error("Failed to send message. Please try again later.")
      }
    } catch (err) {
      toast.error("An unexpected error occurred.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-vscodeBg text-vscodeText font-code">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 text-xs tracking-wide uppercase">
            Contact Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-vscodeBlue mb-2">
            Let's get in touch
          </h2>
          <p className="text-vscodeText/70 text-sm max-w-xl mx-auto">
            Whether you want to collaborate, ask something, or just say hi — drop a message!
          </p>
        </motion.div>

        <Card className="bg-vscodePanel border border-vscodeBorder shadow-lg">
          <CardHeader className="bg-vscodePanelHeader border-b border-vscodeBorder">
            <CardTitle className="text-vscodeBlue text-sm">user@portfolio:~$ contact</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-black/80 text-vscodeText border-vscodeBorder"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-black/80 text-vscodeText border-vscodeBorder"
              />
              <Textarea
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                className="bg-black/80 text-vscodeText border-vscodeBorder"
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-vscodeGreen hover:bg-vscodeGreen/90 text-black"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <div className="pt-6 border-t border-vscodeBorder text-center space-x-4">
              <a
                href="https://github.com/sahithi-cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-vscodeText hover:text-vscodeGreen"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sahithi-balerao29/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-vscodeText hover:text-vscodeGreen"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="mailto:baleraosahithi@gmail.com"
                className="inline-flex items-center gap-1 text-vscodeText hover:text-vscodeGreen"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
