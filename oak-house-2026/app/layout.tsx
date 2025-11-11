import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oak House Co. | Custom Web Design & Development",
  description: "Oak House is a small design studio run by Sam Daugherty. We design and build custom websites for small businesses that fit your business, your goals, and your budget. No templates. No gimmicks. Just clean, professional design that works right every time.",
  openGraph: {
    title: "Oak House Co. | Custom Web Design & Development",
    description: "Oak House is a small design studio run by Sam Daugherty. We design and build custom websites for small businesses that fit your business, your goals, and your budget. No templates. No gimmicks. Just clean, professional design that works right every time.",
    url: "https://oakhouseco.com",
    siteName: "Oak House Co.",
    images: [
      {
        url: "/images/social-share.png",
        width: 1200,
        height: 630,
        alt: "Oak House Co. - Custom Web Design & Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oak House Co. | Custom Web Design & Development",
    description: "Oak House is a small design studio run by Sam Daugherty. We design and build custom websites for small businesses that fit your business, your goals, and your budget.",
    images: ["/images/social-share.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-[#F9F9F9] text-[#1A1B1C] antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
