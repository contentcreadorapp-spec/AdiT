import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

const BASE = siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // AI search crawlers: explicitly allowed (the recommended lever for AI visibility)
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "Applebot-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
