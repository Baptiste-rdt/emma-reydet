import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Emma Reydet",
  description: "Portfolio de Emma Reydet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="min-h-full">
      <body className="min-h-full">
            <Header/>
            <div className="top-0 left-0 w-full min-h-full">
              {children}
            </div>
            <Footer/>
      </body>
    </html>
  );
}
