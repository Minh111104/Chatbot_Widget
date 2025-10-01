# Quick Setup Guide

## 🚀 Deploy Your Chatbot in 5 Minutes

### Step 1: Deploy to Vercel

1. **Click the Deploy Button:**

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Minh111104/Chatbot_Widget)

2. **Add Environment Variables** in Vercel:
   - `OPENAI_API_KEY`: Your OpenAI API key ([get one here](https://platform.openai.com/api-keys))

3. **Deploy!** - You'll get a URL like: `https://chatbot-widget-xyz.vercel.app`

### Step 2: Add to Your GitHub Pages Site

Add this code to your `index.html` on https://minh111104.github.io/ (before the closing `</body>` tag):

```html
<!-- Chatbot Widget -->
<iframe 
  id="chatbot-widget"
  src="https://YOUR-DEPLOYMENT-URL.vercel.app" 
  style="position: fixed; bottom: 0; right: 0; width: 420px; height: 650px; border: none; z-index: 9999;"
  allow="clipboard-write"
></iframe>
```

**Replace** `YOUR-DEPLOYMENT-URL.vercel.app` with your actual Vercel deployment URL.

### Step 3: Customize (Optional)

#### Update AI Knowledge About You

Edit `app/api/chat/route.ts` and update the `SYSTEM_PROMPT` with your information:

```typescript
const SYSTEM_PROMPT = `You are a helpful AI assistant for [Your Name]'s website.

Here's what you know:
- Name: [Your Name]
- Skills: [Your Skills]
- Projects: [Your Projects]
- Contact: [Your Contact Info]

...`
```

Then redeploy to Vercel.

#### Change Widget Colors

Edit `components/ChatWidget.tsx` - search for color classes like:
- `bg-blue-600` → Change to your preferred color
- `text-white` → Change text color
- etc.

## 📱 Test Locally

```bash
# Clone the repo
git clone https://github.com/Minh111104/Chatbot_Widget.git
cd Chatbot_Widget

# Install dependencies
npm install

# Create .env.local and add your API key
echo "OPENAI_API_KEY=sk-your-key-here" > .env.local

# Run dev server
npm run dev

# Open http://localhost:3000
```

## 🎯 Alternative: Standalone Widget for Any Website

If you want to embed just the widget (not the full page):

1. Deploy the chatbot to Vercel
2. Access the widget at: `https://YOUR-URL.vercel.app`
3. Use as iframe on any website

## 🔧 Troubleshooting

### Widget not showing?
- Check that the iframe URL is correct
- Make sure the z-index is high enough
- Check browser console for errors

### API not working?
- Verify `OPENAI_API_KEY` is set in Vercel environment variables
- Check Vercel function logs for errors
- Ensure your OpenAI API key has credits

### Build failing?
- Check Node.js version (should be 18+)
- Run `npm install` to update dependencies
- Check TypeScript errors with `npm run build`

## 📞 Need Help?

Open an issue on GitHub: https://github.com/Minh111104/Chatbot_Widget/issues
