"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AskMeAnything() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)

  const handleAsk = async () => {
    if (!question.trim()) return

    setLoading(true)
    setAnswer("")

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      })

      const data = await res.json()
      setAnswer(data.answer || "Sorry, I couldn't find the answer. Try asking something else!")
    } catch (err) {
      setAnswer("Something went wrong. Please try again later.")
    } finally {
      setLoading(false)
      setQuestion("")
    }
  }

  return (
    <section id="ask-me" className="py-20 bg-vscodeBg text-vscodeText font-code">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 text-xs tracking-wide uppercase">
            IDE Terminal
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-vscodeBlue mb-2">
            Ask Me Anything
          </h2>
          <p className="text-vscodeText/70 text-sm max-w-xl mx-auto">
            Curious about my skills, experience, or tech? Ask below and I’ll answer like a pro terminal assistant.
          </p>
        </motion.div>

        <Card className="bg-vscodePanel border border-vscodeBorder shadow-lg">
          <CardHeader className="bg-vscodePanelHeader border-b border-vscodeBorder">
            <CardTitle className="text-vscodeBlue text-sm">user@portfolio:~$ terminal</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <Textarea
              placeholder="> What do you want to ask?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full bg-black/80 text-vscodeText border-vscodeBorder font-mono"
            />
            <Button
              onClick={handleAsk}
              disabled={loading}
              className="bg-vscodeGreen hover:bg-vscodeGreen/90 text-black"
            >
              {loading ? "Thinking..." : "Ask"}
            </Button>
            {answer && (
              <div className="bg-black/80 p-4 rounded text-green-400 whitespace-pre-line border border-vscodeBorder">
                <span className="text-vscodeText">{"> "}</span>{answer}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
