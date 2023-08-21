import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
          <header>
            <Navbar />
            {/* Call To Actions??? */}
          </header>
          <main className="flex flex-col bg-inherit">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
