import type { Metadata } from "next";
import { Roboto_Mono,  } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import BackgroundGlow from "./components/sub/BackgroundGlow";
import Links from "./components/sub/Links";

export const metadata: Metadata = {
  title: "Muhammad Afzaal",
  description: "Welcome to Muhammad Afzaal's portfolio. Explore projects, certifications, and more.",
  keywords: ["Muhammad Afzaal", "Afzaal", "Muhammad Afzaal Muzaffaruddin", "Web Developer", "Fullstack Developer", "Mobile Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth" >
      <body
        className={`flex flex-col items-center justify-center antialiased bg-black w-full h-full overflow-x-hidden `}
      >
        <BackgroundGlow />
        <Navbar />
        <Links />
        {children}
      </body>
    </html>
  );
}
