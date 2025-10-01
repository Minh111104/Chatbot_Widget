import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Chatbot Widget Demo
        </h1>
        <p className="text-gray-600 mb-6">
          This is a demonstration page for the chatbot widget. The chatbot appears at the bottom right corner.
          Click on it to start a conversation!
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Features:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Serverless architecture using Next.js API routes</li>
              <li>AI-powered responses using OpenAI API</li>
              <li>Chat history with Supabase</li>
              <li>Responsive design with Tailwind CSS</li>
              <li>Floating widget similar to Dialogflow</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">How to Use:</h2>
            <p className="text-gray-600">
              Click the chat icon in the bottom right corner to open the chatbot.
              Ask questions about the site owner, projects, or anything else you&apos;d like to know!
            </p>
          </div>
        </div>
      </div>
      <ChatWidget />
    </main>
  )
}
