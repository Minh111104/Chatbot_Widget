# 🚀 Quick Reference Card

## One-Command Setup

```bash
git clone https://github.com/Minh111104/Chatbot_Widget.git
cd Chatbot_Widget
./setup.sh
```

## Essential Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check code quality
```

## Deploy to Vercel (Easiest)

1. Visit: https://vercel.com/new
2. Import: `Minh111104/Chatbot_Widget`
3. Add env var: `OPENAI_API_KEY=sk-your-key`
4. Click: Deploy
5. Done! 🎉

## Embed on GitHub Pages

Add to your `index.html`:

```html
<iframe 
  src="https://YOUR-APP.vercel.app" 
  style="position: fixed; bottom: 0; right: 0; width: 420px; height: 650px; border: none; z-index: 9999;">
</iframe>
```

## Environment Variables

Create `.env.local`:

```env
OPENAI_API_KEY=sk-your-openai-api-key-here
```

Get API key: https://platform.openai.com/api-keys

## File Locations

| What | Where |
|------|-------|
| Chatbot UI | `components/ChatWidget.tsx` |
| AI Logic | `app/api/chat/route.ts` |
| Styles | `app/globals.css` |
| Config | `next.config.js` |

## Customize AI Responses

Edit `app/api/chat/route.ts`:

```typescript
const SYSTEM_PROMPT = `
  You are a helpful assistant for [Your Name]'s website.
  
  You know about:
  - Skills: [Your Skills]
  - Projects: [Your Projects]
  - Contact: [Your Email]
`
```

## Customize Colors

Edit `components/ChatWidget.tsx`:

```typescript
// Change these Tailwind classes:
bg-blue-600    → bg-purple-600
text-white     → text-gray-800
hover:bg-blue-700 → hover:bg-purple-700
```

## Common Issues

### Build fails?
```bash
rm -rf node_modules .next
npm install
npm run build
```

### API not working?
- Check `OPENAI_API_KEY` in Vercel env vars
- Verify API key has credits
- Check Vercel function logs

### Widget not showing?
- Verify iframe URL is correct
- Check browser console for errors
- Ensure z-index is high enough

## Project Structure

```
Chatbot_Widget/
├── app/
│   ├── api/chat/route.ts    ← AI logic here
│   ├── page.tsx             ← Demo page
│   └── layout.tsx           ← Root layout
├── components/
│   └── ChatWidget.tsx       ← Widget UI here
├── public/
│   ├── embed.html           ← Embed guide
│   └── integration-example.html
├── README.md                ← Full docs
├── SETUP.md                 ← Quick start
└── .env.example             ← Env template
```

## Key URLs

- **OpenAI API Keys**: https://platform.openai.com/api-keys
- **Vercel Deploy**: https://vercel.com/new
- **GitHub Repo**: https://github.com/Minh111104/Chatbot_Widget
- **Your Website**: https://minh111104.github.io/

## Need Help?

1. Check `README.md` for full documentation
2. See `SETUP.md` for deployment guide
3. Read `IMPLEMENTATION.md` for technical details
4. Open issue on GitHub for support

---

**Quick Deploy**: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Minh111104/Chatbot_Widget)
