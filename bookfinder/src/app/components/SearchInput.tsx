import React from 'react';

const SearchInput = () => {
  return (
    <div className="flex items-center space-x-2 bg-FFC700">
      <input
        type="text"
        className="border border-black rounded-none px-4 py-2 text-black w-full"
      />
      <button className="border border-black rounded-none px-4 py-2 text-black" type="button">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
