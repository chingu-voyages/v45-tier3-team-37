import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  //TODO: Add a better description
  title: "Book App",
  description:
    "An application to search books, their prices and similar information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <StickyHeader />
          <main className="flex flex-col bg-inherit">{children}</main>
          <Toaster />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
