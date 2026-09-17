import type { Metadata } from "next";
import { Big_Shoulders_Display, IBM_Plex_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import "./globals.css";

const shoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-shoulders",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devine Auto Repairs — Newmills, Dungannon",
  description:
    "MOT prep, servicing, remapping and tyres — plus mobile air-con for cars, tractors and plant, and 24/7 recovery. Newmills, Co. Tyrone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${shoulders.variable} ${plex.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
