import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Casa Delight — Taste the Art of Fine Dining",
    template: "%s · Casa Delight",
  },
  description:
    "Casa Delight is a modern Georgian fine dining destination in Tbilisi, blending heritage flavors with cinematic presentation and warm hospitality.",
  keywords: [
    "Casa Delight",
    "Georgian restaurant",
    "fine dining Tbilisi",
    "luxury restaurant",
    "modern Georgian cuisine",
  ],
  openGraph: {
    title: "Casa Delight — Taste the Art of Fine Dining",
    description:
      "Experience elevated Georgian gastronomy, curated qvevri wines, and immersive ambiance at Casa Delight.",
    url: "https://casadelight.demo",
    siteName: "Casa Delight",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Casa Delight fine dining experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@casadelight",
    title: "Casa Delight — Taste the Art of Fine Dining",
    description:
      "A cinematic culinary house celebrating Georgian heritage with modern finesse.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f0b07" },
    { color: "#f9f5f0" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased selection:bg-amber-300/40 selection:text-black`}
      >
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1 pt-24 lg:pt-28">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
