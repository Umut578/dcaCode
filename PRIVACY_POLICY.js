
const privacyPolicy = {
  title: "dcaCode Privacy Policy",
  lastUpdated: "2026-10-31",

  sections: [
    {
      title: "Introduction",
      content:
        "This policy explains how dcaCode handles information when you use the application."
    },
    {
      title: "Information Processing",
      content:
        "Prompts, code, files and other content you submit to AI features may be processed by the services you choose to use."
    },
    {
      title: "Third-Party Services",
      content:
        "dcaCode may use OpenRouter for AI requests and Vercel for optional API hosting. These providers have their own privacy policies."
    },
    {
      title: "API Keys",
      content:
        "Users should keep API keys private. Never publish secret keys in public GitHub repositories."
    },
    {
      title: "Data Storage",
      content:
        "Information may be stored locally or processed by third-party services depending on your configuration."
    },
    {
      title: "Security",
      content:
        "Reasonable security measures should be used to protect application data and credentials."
    },
    {
      title: "Policy Updates",
      content:
        "This policy may change when application features or data practices change."
    },
    {
      title: "Contact",
      content:
        "For questions, contact the dcaCode project maintainer through the official GitHub repository."
    }
  ]
};

if (typeof module !== "undefined") {
  module.exports = privacyPolicy;
}
