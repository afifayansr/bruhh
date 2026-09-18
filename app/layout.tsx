import type { Metadata, Viewport } from "next";
import { Orbitron, Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import LayoutWrapper from "./components/layout-wrapper";
import ThemeSwitcher from "./components/ThemeSwitcher";
import CookieConsent from "./components/CookieConsent";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vyperbd.cloud"),
  title: {
    default: "VyperBD – Minecraft Server Hosting Bangladesh | BDIX VPS Hosting",
    template: "%s | VyperBD"
  },
  description: "VyperBD provides affordable Minecraft server hosting and VPS hosting in Bangladesh. Start your Minecraft server from only ৳200/month with fast storage, reliable performance and DDoS protection. VyperBD is Bangladesh's best Minecraft hosting provider. Premium Minecraft server hosting, game servers, VPS & web hosting powered by our own infrastructure — BDIX, India, Singapore & USA. DDoS protected, NVMe SSD, 24/7 support.",
  keywords: [
    "Minecraft Hosting Bangladesh",
    "Best Minecraft Hosting Bangladesh",
    "Minecraft Server Hosting BDIX",
    "BDIX Minecraft Hosting",
    "Cheap Minecraft Hosting Bangladesh",
    "VyperBD",
    "VyperBD Hosting",
    "VyperBD Minecraft",
    "Game Server Hosting Bangladesh",
    "FiveM Server Hosting",
    "Hytale Server Hosting",
    "VPS Hosting Bangladesh",
    "BDIX VPS",
    "Ryzen Minecraft Hosting",
    "NVMe Minecraft Hosting",
    "DDoS Protected Hosting Bangladesh",
    "Global Minecraft Hosting",
    "Singapore Minecraft Hosting",
    "India Minecraft Hosting",
    "VyperBD Cloud",
    "Bot Hosting Bangladesh",
    "Web Hosting Bangladesh",
    "Own Infrastructure Hosting",
    "Dedicated Server Bangladesh",
    "Premium Minecraft Server Hosting in Bangladesh",
    "Minecraft hosting Bangladesh",
    "Minecraft server hosting Bangladesh", 
    "Minecraft hosting BD",
    "BDIX Minecraft hosting",
    "Minecraft server BD",
    "Cheap Minecraft hosting Bangladesh",
    "Minecraft Java hosting Bangladesh",
    "Minecraft SMP hosting Bangladesh",
    "Minecraft server price Bangladesh",
    "VPS hosting Bangladesh",
    "BDIX VPS hosting",
    "Minecraft hosting 200 taka",
    "Minecraft hosting ৳200",
  ],
  authors: [{ name: "VyperBD", url: "https://vyperbd.cloud" }],
  creator: "VyperBD",
  publisher: "VyperBD",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vyperbd.cloud",
    siteName: "VyperBD — Best Minecraft Hosting in Bangladesh",
    title: "VyperBD – Minecraft Server Hosting Bangladesh | BDIX VPS Hosting",
    description: "Affordable Minecraft server hosting and VPS in Bangladesh. Starting ৳200/month. BDIX, India & Singapore. DDoS protected, NVMe SSD, 24/7 support.",
    images: [
      {
        url: "/meta/Logo.png",
        width: 1254,
        height: 1254,
        alt: "VyperBD — Best Minecraft Hosting in Bangladesh",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VyperBD – Minecraft Server Hosting Bangladesh | BDIX VPS",
    description: "Bangladesh's best Minecraft hosting. Powered by VyperBD's own infrastructure. BDIX, India & Singapore.",
    images: ["/meta/Logo.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/meta/Logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  },
  alternates: {
    canonical: "https://vyperbd.cloud",
  },
  category: "technology",
  applicationName: "VyperBD",
  referrer: "origin-when-cross-origin",
  verification: {},
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080B10" },
  ],
};

// Schema.org structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vyperbd.cloud/#organization",
      "name": "VyperBD",
      "url": "https://vyperbd.cloud",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vyperbd.cloud/meta/Logo.png",
      },
      "description": "VyperBD provides affordable Minecraft server hosting and VPS hosting in Bangladesh. Start your Minecraft server from only ৳200/month with fast storage, reliable performance and DDoS protection. VyperBD is Bangladesh's leading Minecraft and game server hosting provider, powered by own infrastructure across BDIX, India, Singapore and USA.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+880-01896408514",
        "contactType": "customer support",
        "availableLanguage": ["English", "Bengali"],
      },
      "sameAs": [
        "https://discord.vyperbd.cloud",
        "https://status.vyperbd.cloud",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://vyperbd.cloud/#website",
      "url": "https://vyperbd.cloud",
      "name": "VyperBD",
      "description": "Best Minecraft Hosting in Bangladesh — powered by VyperBD's own infrastructure",
      "publisher": { "@id": "https://vyperbd.cloud/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://vyperbd.cloud/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://vyperbd.cloud/#webpage",
      "url": "https://vyperbd.cloud",
      "name": "VyperBD – Minecraft Server Hosting Bangladesh | BDIX VPS",
      "isPartOf": { "@id": "https://vyperbd.cloud/#website" },
      "about": { "@id": "https://vyperbd.cloud/#organization" },
      "description": "Bangladesh's best Minecraft hosting powered by VyperBD's own global infrastructure.",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is VyperBD the best Minecraft hosting in Bangladesh?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "VyperBD is one of Bangladesh's leading Minecraft hosting providers, offering BDIX-connected servers with NVMe SSD storage, DDoS protection, and 24/7 support powered by our own infrastructure.",
          },
        },
        {
          "@type": "Question",
          "name": "Does VyperBD use its own infrastructure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. VyperBD powers all servers using our own infrastructure across BDIX Bangladesh, India, Singapore, Japan, and USA locations.",
          },
        },
        {
          "@type": "Question",
          "name": "What locations does VyperBD support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "VyperBD operates servers in Bangladesh (BDIX), India, Singapore, Japan, and USA.",
          },
        },
        {
          "@type": "Question",
          "name": "Does VyperBD offer DDoS protection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All VyperBD hosting plans include network DDoS protection to help keep your services online.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="BD" />
        <meta name="geo.placename" content="Bangladesh" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="VyperBD" />
        <link rel="canonical" href="https://vyperbd.cloud" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VyperBD",
              "image": "https://vyperbd.cloud/meta/Logo.png",
              "url": "https://vyperbd.cloud",
              "telephone": "+880-01896408514",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BD",
                "addressRegion": "Bangladesh",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 23.8103,
                "longitude": 90.4125,
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                "opens": "00:00",
                "closes": "23:59",
              },
              "sameAs": ["https://discord.vyperbd.cloud"],
            })
          }}
        />
      </head>
      <body className={`${orbitron.variable} ${quicksand.variable} antialiased quicksand-font`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LayoutWrapper>
            <ThemeSwitcher />
            {children}
            <CookieConsent />
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
