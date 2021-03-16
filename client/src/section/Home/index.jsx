import React from "react";

const Home = () => {
  return (
    <div className="border-b-2 border-gray-700">
      <div className="flex justify-center items-center py-12 my-12 max-w-md mx-auto ">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="px-3 py-3 placeholder-gray-400 text-gray-700 text-sm shadow focus:outline-none focus:shadow-outline w-full focus:ring-2 focus:ring-gray-400"
        />
        <button className="py-3 px-8 bg-blue-400 hover:bg-blue-500 text-sm shadow focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-gray-400">
          <i className="fas fa-search text-lg text-blue-900"></i>
        </button>
      </div>
    </div>
  );
};

export { Home };
