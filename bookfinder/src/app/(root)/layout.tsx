import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SearchInput from "@/components/SearchInput";
import Footer from "@/components/Footer";
import { useState } from "react";

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

  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <header>
            <Navbar />
            <SearchInput updateSearchResults={updateSearchResults} />
          </header>

          <main searchResults={searchResults} className="flex flex-col bg-inherit">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
