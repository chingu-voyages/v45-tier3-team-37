import React from "react";

const InputSearch = () => {
  return (
    <div className="left-0 top-0 w-full shadow-md">
      <div className="w-full bg-white px-4 py-3 sm:px-8 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center">
          <select className="w-full sm:w-32 bg-white border border-gray-300 px-3 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2 focus:outline-none">
            <option value="">TITLE</option>
            {/* Categories options */}
          </select>
          <input
            type="text"
            className="w-full sm:flex-grow border border-gray-300 px-3 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2 focus:outline-none"
            placeholder="Enter your search..."
          />
          <button className="w-full sm:w-auto bg-teal-600 text-white px-4 py-2 rounded-md mr-0 md:mr-7">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputSearch;
