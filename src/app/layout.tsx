import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {Analytics} from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paragon Policy Fellowship",
  description:
    "a national fellowship connecting students with tech policy opportunities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RSQFTB33RS"></Script>
        <Script id="google-analytics-inject">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RSQFTB33RS');`}
        </Script>

        <meta name="title" content="Paragon Policy Fellowship" />
        <meta name="description" content="Paragon connects students with tech policy opportunities from their state and local governments.  Fellows will spend 5 hours a week researching and writing a policy brief on key issues for their state and local governments, with topics ranging from broadband infrastructure, renewable energy, to AI procurement." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.paragonfellowship.org/" />
        <meta property="og:title" content="Paragon Policy Fellowship" />
        <meta property="og:description" content="Paragon connects students with tech policy opportunities from their state and local governments.  Fellows will spend 5 hours a week researching and writing a policy brief on key issues for their state and local governments, with topics ranging from broadband infrastructure, renewable energy, to AI procurement." />
        <meta property="og:image" content="https://www.paragonfellowship.org/thumb.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.paragonfellowship.org/" />
        <meta property="twitter:title" content="Paragon Policy Fellowship" />
        <meta property="twitter:description" content="Paragon connects students with tech policy opportunities from their state and local governments.  Fellows will spend 5 hours a week researching and writing a policy brief on key issues for their state and local governments, with topics ranging from broadband infrastructure, renewable energy, to AI procurement." />
        <meta property="twitter:image" content="https://www.paragonfellowship.org/thumb.png" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <Analytics />
        </body>
    </html>
  );
}
