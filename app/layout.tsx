import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";


export const metadata: Metadata = {
  title: "Lambda-labs",
  description: "Votre destination vers un ecosysteme 100% C/C++",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white">
      
      <body>
      
          <main>
            {children}
          </main>
      
        
        </body>
    </html>
  );
}
