# Contributing to Chatbot Widget

Thank you for your interest in contributing! This document provides guidelines for contributing to the Chatbot Widget project.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Chatbot_Widget.git
   cd Chatbot_Widget
   ```
3. **Run the setup script:**
   ```bash
   ./setup.sh
   ```
4. **Start developing:**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
Chatbot_Widget/
├── app/
│   ├── api/chat/        # API routes for chat functionality
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home/demo page
│   └── globals.css      # Global styles
├── components/
│   └── ChatWidget.tsx   # Main chatbot widget component
├── public/              # Static files and integration examples
├── .env.example         # Environment variables template
└── README.md            # Documentation
```

## 🛠️ Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules: `npm run lint`
- Use Tailwind CSS for styling
- Keep components modular and reusable

### Making Changes

1. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**

3. **Test your changes:**
   ```bash
   npm run lint    # Check code style
   npm run build   # Ensure it builds
   npm run dev     # Test locally
   ```

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: description of your feature"
   ```

5. **Push and create a PR:**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Format

Use conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## 🎯 Areas for Contribution

### High Priority
- [ ] Supabase integration for chat history
- [ ] User authentication
- [ ] Admin dashboard for chat analytics
- [ ] Multi-language support

### Medium Priority
- [ ] Voice input/output
- [ ] File upload support
- [ ] Custom themes
- [ ] Rate limiting
- [ ] Message persistence

### Low Priority
- [ ] Emoji support
- [ ] Message reactions
- [ ] Chat export functionality
- [ ] Mobile app wrapper

## 🧪 Testing

When adding new features:
1. Test the feature locally
2. Test the build process
3. Test in different browsers (Chrome, Firefox, Safari)
4. Test on mobile devices (responsive design)

## 📝 Documentation

When adding features:
- Update README.md if needed
- Add code comments for complex logic
- Update SETUP.md for setup changes
- Add usage examples

## 🐛 Bug Reports

When filing a bug report, include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/environment details

## 💡 Feature Requests

For feature requests:
- Describe the feature clearly
- Explain the use case
- Provide examples or mockups if possible

## 📞 Questions?

- Open an issue for questions
- Check existing issues first
- Tag appropriately (bug, feature, question, etc.)

## 🙏 Thank You!

Your contributions make this project better. We appreciate your time and effort!

---

Happy coding! 🚀
