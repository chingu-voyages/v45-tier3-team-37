"use client"

import React, { useState } from "react";
import Link from "next/link";

const SearchInput = () => {

  const [input, setInput] = useState("");
  const [select, setSelect] = useState("search");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    e.preventDefault();
    window.location.href = `/books?${select}=${input}`
  }
};

  return (
    <div className="left-0 top-0 w-full shadow-md">
    <div className="w-full bg-white px-4 py-3 sm:px-8 sm:py-6">
      <div className="flex flex-col sm:flex-row items-center">
        <select className="w-full sm:w-32 bg-white border border-gray-300 px-3 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2 focus:outline-none"
          onChange={(e) => setSelect(e.target.value)}>
          <option value="search">ALL</option>
          <option value="author">AUTHOR</option>
          <option value="title">TITLE</option>
          <option value="publisher">PUBLISHER</option>
        
          {/* Categories options */}
        </select>
        <input
          type="text"
          className="w-full sm:flex-grow border border-gray-300 px-3 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2 focus:outline-none"
          placeholder="Enter your search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button 
        
        className="w-full sm:w-auto bg-teal-600 text-white px-4 py-2 rounded-md">
          <Link
            href={{
              pathname: `/books`,
              query: {[`${select}`]: input}
            }}
          >
            SEARCH
          </Link>
        </button>
      </div>
    </div>
  </div>
  );
};

export default SearchInput;