#!/bin/bash

# Chatbot Widget Setup Script
# This script helps you set up the development environment

set -e

echo "🤖 Chatbot Widget Setup"
echo "======================"
echo ""

# Check Node.js version
echo "📦 Checking Node.js version..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Warning: Node.js version should be 18 or higher. You have $(node -v)"
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Check for .env.local file
if [ ! -f .env.local ]; then
    echo "🔑 Setting up environment variables..."
    cp .env.example .env.local
    echo ""
    echo "⚠️  IMPORTANT: Edit .env.local and add your OpenAI API key!"
    echo ""
    echo "Get your API key from: https://platform.openai.com/api-keys"
    echo ""
    read -p "Do you have an OpenAI API key ready? (y/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter your OpenAI API key: " OPENAI_KEY
        sed -i.bak "s/your_openai_api_key_here/$OPENAI_KEY/" .env.local
        rm -f .env.local.bak
        echo "✅ API key configured!"
    else
        echo "⚠️  Please edit .env.local and add your API key before running the dev server"
    fi
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Make sure your OpenAI API key is set in .env.local"
echo "   2. Run 'npm run dev' to start the development server"
echo "   3. Open http://localhost:3000 in your browser"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Full documentation"
echo "   - SETUP.md - Quick setup guide"
echo "   - public/embed.html - Embedding instructions"
echo ""
