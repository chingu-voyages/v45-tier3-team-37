"use client"

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SearchInput from "@/components/SearchInput";

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-white shadow-md z-10"
          : ""
      }`}>
      <Navbar />
      <SearchInput />
    </header>
  );
};

export default StickyHeader;
