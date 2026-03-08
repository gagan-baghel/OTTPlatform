import type { Metadata } from "next"
import { DM_Sans, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "CINEVERSE | Premium OTT Streaming",
    template: "%s | CINEVERSE",
  },
  description:
    "CINEVERSE is a premium OTT experience for originals, watch parties, cinematic discovery, and creator-first storytelling.",
  keywords: [
    "OTT platform",
    "streaming",
    "watch party",
    "movies",
    "series",
    "cineverse",
    "originals",
  ],
  openGraph: {
    title: "CINEVERSE | Premium OTT Streaming",
    description:
      "Stream bold originals, discover curated stories, and watch together in real time.",
    type: "website",
    siteName: "CINEVERSE",
  },
  twitter: {
    card: "summary_large_image",
    title: "CINEVERSE | Premium OTT Streaming",
    description:
      "A modern OTT platform with originals, watch parties, and immersive discovery.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${syne.variable} app-shell antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
