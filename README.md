# Chatbot Widget

A modern, AI-powered chatbot widget built with Next.js, OpenAI, and Tailwind CSS. This chatbot can be embedded on any website to provide interactive assistance to visitors.

## 🚀 Features

- **Serverless Architecture**: Built with Next.js API routes for serverless deployment
- **AI-Powered**: Uses OpenAI's GPT-3.5-turbo for intelligent responses
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Floating Widget**: Dialogflow-style chat widget that appears at the bottom right
- **Easy Integration**: Can be embedded on any website
- **Chat History**: Maintains conversation context for better responses
- **Customizable**: Easy to customize appearance and behavior

## 🛠️ Tech Stack

- **Next.js 15** - React framework for production
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **OpenAI API** - AI-powered chat responses
- **Supabase** (Optional) - For chat history storage

## 📋 Prerequisites

- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- (Optional) Supabase account for chat history

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Minh111104/Chatbot_Widget.git
cd Chatbot_Widget
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your OpenAI API key:

```env
OPENAI_API_KEY=sk-your-actual-openai-api-key
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the chatbot in action.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this chatbot is using Vercel:

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Add your environment variables in the Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Minh111104/Chatbot_Widget)

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Set environment variables in Netlify dashboard

## 🔧 Customization

### Customize the AI Assistant

Edit `/app/api/chat/route.ts` to modify the system prompt:

```typescript
const SYSTEM_PROMPT = `Your custom system prompt here...`
```

### Customize the UI

The chatbot widget is in `/components/ChatWidget.tsx`. You can customize:

- Colors and styling (uses Tailwind CSS classes)
- Position (currently bottom-right)
- Size and dimensions
- Welcome message
- Icons and animations

### Customize for Your Website

To use this chatbot on your personal website (https://minh111104.github.io/):

1. Deploy the chatbot to Vercel or Netlify
2. Update the system prompt with information about yourself
3. Embed the widget on your main website using an iframe or by copying the component

## 📁 Project Structure

```
Chatbot_Widget/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Chat API endpoint
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles
├── components/
│   └── ChatWidget.tsx             # Main chatbot widget component
├── lib/                           # Utility functions (future)
├── public/                        # Static assets
├── .env.example                   # Environment variables template
├── next.config.js                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
└── package.json                   # Dependencies
```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | No |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | No |

## 🎨 Embedding on Your Website

### Option 1: iFrame Embed

Add this to your website:

```html
<iframe 
  src="https://your-chatbot-domain.vercel.app" 
  style="position: fixed; bottom: 0; right: 0; width: 400px; height: 600px; border: none; z-index: 9999;"
></iframe>
```

### Option 2: Component Integration

If your main website uses React, you can copy the `ChatWidget.tsx` component and integrate it directly.

## 📝 API Routes

### POST `/api/chat`

Send a chat message and get an AI response.

**Request:**
```json
{
  "message": "Hello, who are you?",
  "history": [
    { "role": "user", "content": "Previous message", "timestamp": "..." },
    { "role": "assistant", "content": "Previous response", "timestamp": "..." }
  ]
}
```

**Response:**
```json
{
  "message": "I'm an AI assistant here to help answer your questions!"
}
```

## 🚧 Future Enhancements

- [ ] Supabase integration for persistent chat history
- [ ] Multiple language support
- [ ] Voice input/output
- [ ] File upload support
- [ ] Analytics and usage tracking
- [ ] Custom themes
- [ ] Admin dashboard

## 📄 License

MIT License - feel free to use this project for your own purposes!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ by Minh
