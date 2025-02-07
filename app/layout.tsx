import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forex Dream Catchers | Master Forex Trading & Financial Freedom",
  description: "Join Forex Dream Catchers and learn the art of forex trading with proven strategies, expert mentorship, and exclusive resources. Start your journey to financial freedom today!",

  keywords: [
    "forex trading",
    "forex signals",
    "forex mentorship",
    "forex strategies",
    "financial freedom",
    "day trading",
    "swing trading",
    "technical analysis",
    "forex indicators",
    "trading psychology",
    "forex education",
    "trading academy",
  ],

  openGraph: {
    title: "Forex Dream Catchers | Master Forex Trading & Financial Freedom",
    description: "Unlock the secrets of successful forex trading with expert guidance, premium resources, and a supportive community. Your financial breakthrough starts here.",
    url: "https://forexdreamcatchers.com",
    siteName: "Forex Dream Catchers",
    images: [
      {
        url: "/images/forex-dream-catchers-og.jpg",
        width: 1200,
        height: 630,
        alt: "Forex Dream Catchers - Master Forex Trading",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Forex Dream Catchers | Master Forex Trading & Financial Freedom",
    description: "Join Forex Dream Catchers and learn forex trading from the best. Build financial independence with proven strategies and expert insights.",
    images: ["/images/forex-dream-catchers-og.jpg"],
  },

  metadataBase: new URL("https://forexdreamcatchers.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0e1b34" />

        {/* Robots.txt for SEO */}
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://forexdreamcatchers.com" />

        {/* Schema Markup (Structured Data) */}
        <script type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Forex Dream Catchers",
              "url": "https://forexdreamcatchers.com",
              "logo": "https://forexdreamcatchers.com/logo.png",
              "description": "Join Forex Dream Catchers and master forex trading with expert mentorship, proven strategies, and a step-by-step program.",
              "sameAs": [
                "https://twitter.com/forexdreamcatchers",
                "https://www.facebook.com/forexdreamcatchers",
                "https://www.instagram.com/forexdreamcatchers"
              ]
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
