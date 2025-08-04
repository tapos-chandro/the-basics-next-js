'use client'

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import NavBar from "./components/NavBar";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Routes where NavBar and container should be hidden
const noLayoutRoutes = ["marketing"];

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const findRoute = pathname.split("/").find(route =>noLayoutRoutes.includes(route));
  // const hideLayout = noLayoutRoutes.includes(pathname);
  

  console.log("Current Pathname:", findRoute);


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        { findRoute === 'marketing'? "":   <NavBar />}
        
        <main className={`container mx-auto px-4 py-8 `}>
          {children}
        </main>

      </body>
    </html>
  );
}
