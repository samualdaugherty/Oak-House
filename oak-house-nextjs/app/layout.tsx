import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
  weight: '800',
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  weight: ['300', '700'],
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Oak House Co. | Marketing Services, Web Services, and Conversion Funnels Made Easy",
  description: "We believe small business is the lynchpin of our economy, and it's getting harder and harder for them to compete in a digital world. We know how to fix that problem, and we can do it for less than the cost of a part-time employee, with none of the liability.",
  openGraph: {
    url: "https://oakhouseco.com",
    type: "website",
    title: "Oak House Co.",
    description: "We believe small business is the lynchpin of our economy, and it's getting harder and harder for them to compete in a digital world. We know how to fix that problem, and we can do it for less than the cost of a part-time employee, with none of the liability.",
    images: ["https://oakhouseco.com/img/social-share.png"],
  },
  twitter: {
    card: "summary",
    title: "Oak House Co.",
    description: "We believe small business is the lynchpin of our economy, and it's getting harder and harder for them to compete in a digital world. We know how to fix that problem, and we can do it for less than the cost of a part-time employee, with none of the liability.",
    images: ["https://oakhouseco.com/img/social-share.png"],
  },
  verification: {
    google: "E00IA2gwlcPkwUkoD4XlI4o3Sf7cWoAQ06XIWrDO8eE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-156416583-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-156416583-1');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
