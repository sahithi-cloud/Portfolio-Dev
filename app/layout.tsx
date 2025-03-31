import "../styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Toaster } from 'sonner';
export const metadata: Metadata = {
  title: "Sahithi Balerao",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
            <head>
        {/* ✅ Add this line to include Fira Code */}
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />
      </head>
      <body >
        {children}</body>
      <Toaster richColors position="top-right" />
    </html>
  );
}
