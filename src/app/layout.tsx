import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CertLaunch — Compare Verified Licensing Schools & Save",
  description: "Compare approved licensing schools side-by-side. Access exclusive discount codes for Real Estate, MLO, Appraisal, Insurance, and Home Inspection courses.",
  keywords: "licensing courses, certification, real estate license, MLO license, insurance license, career change, compare schools",
  openGraph: {
    title: "CertLaunch — Compare Verified Licensing Schools & Save",
    description: "Compare approved licensing schools side-by-side. Access exclusive discount codes.",
    type: "website",
    siteName: "CertLaunch",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${dmSans.variable} bg-white text-neutral-800 font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
