import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"
import { portfolioKnowledge } from "@/data/portfolio-knowledge"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  const { question } = await req.json()

  if (!question) {
    return NextResponse.json({ answer: "No question provided." }, { status: 400 })
  }

  try {
    const context = JSON.stringify(portfolioKnowledge)

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are Sahithi Balerao's portfolio AI. Only answer using the data below:\n${context}`,
        },
        {
          role: "user",
          content: question,
        },
      ],
      temperature: 0.5,
      max_tokens: 500,
    })

    const answer = response.choices?.[0]?.message?.content
    return NextResponse.json({ answer: answer || "No answer available." })
  } catch (err: any) {
    console.error("❌ OpenAI API Error:", err)
    return NextResponse.json(
      { answer: "There was an error contacting OpenAI", error: err.message },
      { status: 500 }
    )
  }
}
