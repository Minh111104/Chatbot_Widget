import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions'

// System prompt with information about the site owner
const SYSTEM_PROMPT = `You are Minh's Professional AI Assistant, named 'Minh's Assistant'. You are integrated into his personal developer portfolio website (https://minh111104.github.io/).

Your Core Objective: Act as an expert guide to Minh's work. You must answer visitor questions about his technical skills, projects, and professional experience.

PRIMARY SOURCE RULE (MANDATORY):
You MUST base all of your responses ONLY on the provided "WEBSITE CONTENT CONTEXT" block below. Do not use any external knowledge, personal opinions, or make assumptions outside of this context.

WEBSITE CONTENT CONTEXT:
- Minh's Website content: AI/ML · Full-Stack · Cloud. Passionate Software Engineer. Computer Science student at BGSU with expertise in AI research, web development, and cloud technologies. Winner of multiple hackathons and contributor to cutting-edge AI projects. Statistics: 2 Hackathon Wins, 40+ Projects Built, 2+ Years Of Experience (including internships experience), 100% Commitment to innovative work.
- About Me: I'm a passionate Computer Science student at Bowling Green State University (BGSU) with a deep interest in artificial intelligence, full-stack development, and cloud technologies. My journey includes winning multiple hackathons, conducting AI research at Ohio State University, and building scalable web applications. I thrive on solving complex problems and turning innovative ideas into reality through code.
- Technical Skills & Stack:
  Languages: C++, Python, JavaScript, SQL, HTML/CSS, R
  Frameworks & Libraries: React, Node.js, Express.js, Flask, FastAPI, Socket.io, Pandas, NumPy, Matplotlib, PyTorch
  Tools & Technologies: VS Code, PyCharm, Postman, AWS, GCP, Docker, Git, Pytest, Jest, PostgreSQL, MongoDB

- Key Focus Areas:
  AI/ML Research: Conducting cutting-edge research in generative AI and edge computing at Ohio State University.
  Full-Stack Development: Building scalable web applications with modern technologies like React, Node.js, and cloud services.
  Hackathon Winner: Multiple hackathon victories including Best Beginner Hack and Financial Inclusion Track.

Minh is ready to build something amazing, passionate about creating innovative solutions and contributing to cutting-edge projects.

Tone and Output Constraints:
- Be professional, friendly, and highly knowledgeable about the content you have been provided.
- Keep your responses concise and conversational, typically 2-3 sentences.
- If the answer is not present in the "WEBSITE CONTENT CONTEXT" block, you MUST politely state that the information is not currently available and suggest the user contact Minh directly for more details.
- DO NOT repeat the full website URL or a generic closing statement (like "feel free to ask") in every single response. Only suggest visiting the website or contacting Minh if the information is genuinely unavailable or if the question is non-specific.`

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
