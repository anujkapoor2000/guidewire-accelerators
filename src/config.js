// ============================================================
// SITE CONFIGURATION
// Edit this file to update all content on the site.
// ============================================================

export const CONFIG = {
  siteName: "Guidewire Focussed Ideas",
  tagline: "AI Accelerators",
  subtitle:
    "A curated collection of AI-powered tools and ideas designed to accelerate Guidewire adoption and innovation.",

  // Add as many segments as you like.
  // Each segment needs: id, label, icon, description, accent (hex color), links[]
  segments: [
    {
      id: "business",
      label: "Business Focussed",
      icon: "◈",
      description:
        "AI accelerators targeting business outcomes — underwriting, claims, customer experience, and growth.",
      accent: "#00C2A8",
      links: [
        {
          title: "Claims Triage Copilot",
          description:
            "AI-assisted first notice of loss triage and routing engine.",
          url: "https://example.com/claims-triage",
          tag: "Claims",
        },
        {
          title: "Underwriting Risk Scorer",
          description:
            "LLM-powered risk narrative analysis for faster underwriting decisions.",
          url: "https://example.com/uw-scorer",
          tag: "Underwriting",
        },
        {
          title: "Customer 360 Insights",
          description:
            "Unified AI dashboard surfacing policyholder behaviour and churn signals.",
          url: "https://example.com/customer360",
          tag: "CX",
        },
        {
          title: "Renewal Propensity Model",
          description:
            "Predict and act on renewal likelihood with explainable AI nudges.",
          url: "https://example.com/renewal",
          tag: "Retention",
        },
      ],
    },
    {
      id: "operations",
      label: "Operations Focussed",
      icon: "◉",
      description:
        "AI accelerators targeting operational efficiency — automation, data quality, and developer productivity.",
      accent: "#FF6B35",
      links: [
        {
          title: "PolicyCenter Data Validator",
          description:
            "Automated data quality checks using AI to flag migration anomalies.",
          url: "https://example.com/pc-validator",
          tag: "Data Quality",
        },
        {
          title: "Gosu Copilot",
          description:
            "AI coding assistant fine-tuned on Guidewire Gosu patterns and idioms.",
          url: "https://example.com/gosu-copilot",
          tag: "Dev Productivity",
        },
        {
          title: "Config Bundle Reviewer",
          description:
            "LLM-assisted review of configuration bundles before promotion to production.",
          url: "https://example.com/bundle-reviewer",
          tag: "CI/CD",
        },
        {
          title: "Document Extraction Pipeline",
          description:
            "Extract structured data from policy documents, SOVs and loss runs at scale.",
          url: "https://example.com/doc-extract",
          tag: "Automation",
        },
      ],
    },

    // ── HOW TO ADD A NEW SEGMENT ─────────────────────────────
    // Uncomment and fill in the block below, then save.
    //
    // {
    //   id: "analytics",
    //   label: "Analytics Focussed",
    //   icon: "◎",
    //   description: "AI tools for reporting, BI, and data-driven decisions.",
    //   accent: "#A78BFA",
    //   links: [
    //     {
    //       title: "My Tool Name",
    //       description: "Short description of what this tool does.",
    //       url: "https://your-url.com",
    //       tag: "Category",
    //     },
    //   ],
    // },
  ],
};
