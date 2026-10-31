
# dcaCode

<p align="center">
  <img src="banner.png" alt="dcaCode Banner" width="100%">
</p>

<p align="center">
  <b>Terminal-Based Coding Workspace with AI</b>
</p>

<p align="center">
  Python • OpenRouter • Vercel
</p>

---

## 🚀 About

**dcaCode** is a Python-based terminal coding workspace that brings together a file explorer, code editor, integrated terminal, and AI assistant in one interface.

It is designed to make coding and project management easier directly from your terminal.

## ✨ Features

- 📁 File explorer
- 📝 Integrated code editor
- 🎨 Syntax highlighting
- 💻 Built-in terminal
- 🤖 AI assistant powered by OpenRouter
- 💬 Streaming AI responses
- 📎 File and folder attachments
- 📦 Project creation and ZIP export
- ⌨️ Keyboard-driven navigation
- 🔐 Optional Vercel API proxy

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + S` | Save file |
| `Ctrl + O` | Open or create file |
| `Ctrl + F` | Find text |
| `Ctrl + G` | Go to line |
| `Ctrl + Z` | Undo |
| `Ctrl + Y` | Redo |
| `Ctrl + E` | API and model settings |
| `Ctrl + L` | Model catalog |
| `F5` | Save and run |
| `F6` | Next pane |
| `F2` | Refresh file tree |
| `F7` | Attach file |
| `F8` | New project |
| `F9` | Skills |
| `Ctrl + Arrow` | Switch panes |
| `Ctrl + Q` | Quit |

## 📋 Requirements

- Python 3
- A terminal with `curses` support
- OpenRouter API key for AI features
- Optional language runtimes for running other languages

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Umut578/dcaCode.git
```

Enter the project directory:

```bash
cd dcaCode
```

Start dcaCode:

```bash
python -m dcacode
```

## 🔑 OpenRouter Configuration

1. Start dcaCode.
2. Press `Ctrl + E`.
3. Enter your OpenRouter API key.
4. Select an AI model.

The local configuration is stored at:

```text
~/.config/dcacode/api.env
```

You can also use the `OPENROUTER_API_KEY` environment variable.

**Never publish your API keys or commit secret files to GitHub.**

## ☁️ Vercel API Proxy

dcaCode includes an optional Vercel serverless proxy.

Configure this environment variable in Vercel:

```env
OPENROUTER_API_KEY=your_private_api_key
```

Then configure the proxy URL:

```bash
export DCACODE_API_PROXY_URL="https://YOUR-PROJECT.vercel.app"
```

Start the application:

```bash
python -m dcacode
```

Read [VERCEL_API_SECURITY.md](VERCEL_API_SECURITY.md) for deployment and security information.

> **Security:** Hiding the upstream API key does not automatically secure a public proxy. Production deployments should use authentication, per-user quotas, shared rate limiting, and provider spending limits.

## 📂 Project Structure

```text
dcaCode/
├── api/
│   ├── chat/
│   │   └── completions.js
│   └── models.js
├── dcacode/
│   ├── __init__.py
│   ├── __main__.py
│   ├── app.py
│   ├── agent.py
│   ├── config.py
│   ├── extras.py
│   └── highlight.py
├── .env.example
├── .gitignore
├── README.md
├── README.txt
└── VERCEL_API_SECURITY.md
```

## 🛡️ Security

- Keep API keys private.
- Never commit `.env` or `api.env`.
- Use Vercel environment variables for server-side secrets.
- Configure rate limits and usage limits.
- Rotate any API key that has been exposed.

## 📜 License

No license is currently included. Add a license file before distributing dcaCode as open-source software.

---

<p align="center">
  Made with ❤️ for developers.
</p>
