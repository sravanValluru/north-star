import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voice-Based Attunement Support in Psychotherapy",
  description:
    "A prosody-informed prototype that supports therapist awareness and timing through subtle vocal pattern recognition, grounded in psychotherapy and IBS-focused contexts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
