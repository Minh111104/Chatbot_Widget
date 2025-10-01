/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use 'export' for static GitHub Pages deployment (no API routes)
  // Comment out for Vercel deployment with API routes
  // output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath: '/Chatbot_Widget',
  // assetPrefix: '/Chatbot_Widget/',
}

module.exports = nextConfig
