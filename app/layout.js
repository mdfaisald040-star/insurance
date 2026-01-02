import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Insurance Solutions",
  description: "Policies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <link
          rel="icon"
          href="https://i.ibb.co/vCRtf74V/Chat-GPT-Image-Jan-2-2026-03-38-59-PM.png"
          type="image/png"
        />
      <body
        className={  `${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
