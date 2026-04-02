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
          title: "Endorsement Impact Analyser",
          description:
            "AI-Powered Mid-Term Endorsement Intelligence -- PolicyCenter AMS Accelerator",
          url: "https://gw-endorsement-analyser-s9qv-g54z9dos5.vercel.app/",
          tag: "Policy",
        },
        {
          title: "FNOL Triage Copilot",
          description:
            "AI-Powered Claims Intake Intelligence -- ClaimCenter AMS Accelerator",
          url: "https://gw-fnol-triage.vercel.app/",
          tag: "Claims",
        },
        {
          title: "Renewal Risk Scorer",
          description:
            "AI-Powered Renewal Book Intelligence -- PolicyCenter AMS Accelerator",
          url: "https://gw-renewal-scorer.vercel.app/",
          tag: "Policy,Renewal",
        },
        {
          title: "Policy Email Ingestor",
          description:
            "AI-Powered Email-to-PolicyCenter -- GW AMS Accelerator",
          url: "https://gw-policy-ingestor.vercel.app/",
          tag: "Policy,CX",
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
          url: "https://vercel.com/kapooranuj-8306s-projects/gosu-pilot-new",
          tag: "Dev Productivity",
        },
        {
          title: "Requirements Analyser",
          description:
            " Fully functional Requirements Analyser application with NLP-powered Guidewire capability mapping. Extracts requirements, user stories, and business rules using LLM integration",
          url: "https://reqanalyser-9tslyp5k.manus.space/dashboard",
          tag: "Requirements,BRD",
        },
        {
          title: "Smart Regression Suite",
          description:
            "AI-Powered GW Test Generation -- Guidewire AMS Accelerator",
          url: "https://gw-smart-regression.vercel.app/",
          tag: "Automation",
        },
         {
          title: "Requirements Analyser",
          description:
            " Requirements Analyser application - POC Dashboard",
              url: "https://gw-req-analyser.vercel.app/",
          tag: "Requirements,BRD",
        },
        
      ],
    },

  
     {
       id: "Estimator",
       label: "Guidewire Estimation Model",
       icon: "◎",
       description: "AI tools for reporting, BI, and data-driven decisions.",
       accent: "#A78BFA",
       links: [
         {
           title: "GW Cloud Migration Estimator",
           description: "Ability to quickly size a ROM estimate",
           url: "https://gw-cloud-estimator.vercel.app/",
           tag: "Estimate",
         },
       ],
     },
  ],
};
