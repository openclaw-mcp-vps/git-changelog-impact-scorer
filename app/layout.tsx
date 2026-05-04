import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Git Changelog Impact Scorer — Auto-generate changelogs with user impact scores",
  description: "Analyzes git commits and generates changelogs ranking changes by estimated user impact. Built for product managers and engineering leads at SaaS companies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="429dccfd-3638-4fa0-a9ca-daeaada0f41d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
