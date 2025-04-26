import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import BackgroundGlow from "./components/sub/BackgroundGlow";
import Links from "./components/sub/Links";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Muhammad Afzaal Muzaffaruddin | Fullstack Web Developer",
  description:
    "Explore the professional portfolio of Muhammad Afzaal, a fullstack web developer. View projects, certifications, and skills.",
  openGraph: {
    title: "Muhammad Afzaal Muzaffaruddin | Fullstack Developer",
    description:
      "Explore projects, certifications, and technical skills of Muhammad Afzaal, a fullstack web and mobile developer.",
    url: "https://muhammadafzaal.com",
    siteName: "Afzaal's Portfolio",
    images: [
      {
        url: "https://muhammadafzaal.com/img/image-2.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Afzaal Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Afzaal Muzaffaruddin | Fullstack Developer",
    description: "Explore projects and certifications of Muhammad Afzaal.",
    images: ["https://muhammadafzaal.com/img/image-2.jpg"],
  },
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
        <Analytics />
      </body>
    </html>
  );
}
