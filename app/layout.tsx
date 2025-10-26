import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mayocalc",
  description: "400g298円のマヨネーズと550g398円のマヨネーズどっちが安いか計算するアプリ",
  manifest: "/mayocalc/manifest.json",
  openGraph: {
    title: "mayocalc",
    description: "400g 298円と550g 398円のマヨネーズどっちが安いか計算するアプリ",
    url: "https://giana12th.github.io/mayocalc/",
    siteName: "mayocalc",
    images: [
      {
        url: "https://github.com/user-attachments/assets/4c414a58-2d16-4647-8981-09d05563206b",
        width: 1200,
        height: 630,
        alt: "mayocalc logo",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
