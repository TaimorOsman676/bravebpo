"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/images/faviconc.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Brave BPO</title>
      </head>
      <body
        className={`bg-gradient-to-br from-[#1b002d] via-purple-700/40 to-[#1b002d] text-white ${inter.className}`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
