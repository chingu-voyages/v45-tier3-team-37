"use client"
import React, { useState } from "react";


const SearchInput = () => {

  const [searchInput, setSearchInput] = useState("");
   const [selectedFilter, setSelectedFilter] = useState("");
 
   const handleSearch = async () => {
    
    try {
      const queryParams = [];
      if (selectedFilter === "title") {
        queryParams.push(`title=${searchInput}`);
      } else if (selectedFilter === "author") {
        queryParams.push(`author=${searchInput}`);
      } else if (selectedFilter === "publisher") {
        queryParams.push(`publisher=${searchInput}`);
      } else {
        queryParams.push(`search=${searchInput}`);
      }
  
      
      const apiUrl = `/api/book?${queryParams.join("&")}`;
  
      
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
  
    
      console.log(data); 
    } catch (error) {
      console.error("Error searching for books:", error);
    }
  };
  
  return (
    <div className="left-0 top-0 w-full shadow-md">
    <div className="w-full bg-white px-4 py-3 sm:px-8 sm:py-6">
      <div className="flex flex-col sm:flex-row items-center">
        <select 
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        className="w-full sm:w-32 bg-white border border-gray-300 px-3 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2 focus:outline-none">
          <option value="">ALL</option>
          <option value="author">AUTHOR</option>
          <option value="title">TITLE</option>
          <option value="publisher">PUBLISHER</option>
        
          {/* Categories options */}
        </select>
        <input
          type="text"
          className="w-full sm:flex-grow border border-gray-300 px-3 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2 focus:outline-none"
          placeholder="Enter your search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
        onClick={handleSearch}
        className="w-full sm:w-auto bg-teal-600 text-white px-4 py-2 rounded-md">
          SEARCH
        </button>
      </div>
    </div>
  </div>
  );
};

export default SearchInput;
