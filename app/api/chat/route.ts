import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions'

// System prompt with information about the site owner
const SYSTEM_PROMPT = `You are a helpful AI assistant for Minh's personal website (https://minh111104.github.io/). 
You help visitors learn more about Minh, their projects, skills, and experience.

Here's what you know about Minh:
- Name: Minh
- Website: https://minh111104.github.io/
- They are a developer/student with interests in technology and programming
- They have created this chatbot widget to make their website more interactive

You should:
- Be friendly, professional, and helpful
- Answer questions about Minh and their work
- Guide visitors to explore the website
- If you don't know something specific about Minh, politely say so and suggest they check the website or contact Minh directly

Keep your responses concise and conversational.`

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      )
    }

    // Initialize OpenAI client inside the request handler
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    // Build messages array for OpenAI
    const messages: ChatCompletionMessageParam[] = [
      { role: 'system', content: SYSTEM_PROMPT },
    ]

    // Add conversation history (last 5 messages to keep context manageable)
    if (history && Array.isArray(history)) {
      const recentHistory = history.slice(-5)
      recentHistory.forEach((msg: { role?: string; content?: string }) => {
        if (msg.role && msg.content) {
          messages.push({
            role: msg.role as 'user' | 'assistant',
            content: msg.content,
          })
        }
      })
    }

    // Add the current user message
    messages.push({ role: 'user', content: message })

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.7,
      max_tokens: 300,
    })

    const assistantMessage = completion.choices[0]?.message?.content || 
      "I'm sorry, I couldn't generate a response. Please try again."

    return NextResponse.json({
      message: assistantMessage,
    })
  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    )
  }
}
