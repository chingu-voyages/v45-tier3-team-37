import React from "react";

const SearchInput = () => {
  return (
    <div className="bg-FFC700 flex items-center space-x-2">
      <input
        type="text"
        className="w-full rounded-none border border-black px-4 py-2 text-black"
      />
      <button
        className="rounded-none border border-black px-4 py-2 text-black"
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
