import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CertLaunch — Launch Your Career. Skip the Degree.",
  description: "Compare licensing courses and certification programs. Find the fastest, most affordable path to a licensed career in real estate, mortgage, insurance, appraisal, and more.",
  keywords: "licensing courses, certification, real estate license, MLO license, insurance license, career change, no degree required",
  openGraph: {
    title: "CertLaunch — Launch Your Career. Skip the Degree.",
    description: "Compare licensing courses and certification programs. Start a new career without overpriced college.",
    type: "website",
    siteName: "CertLaunch",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
