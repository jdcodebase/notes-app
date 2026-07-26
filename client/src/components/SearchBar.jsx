import React from "react";

const SearchBar = ({ openModal, searchTerm, onSearchChange }) => {
  return (
    <div className="max-w-5xl mx-auto md:px-3 md:py-3 flex flex-col gap-4 md:flex-row md:items-center">
      <input
        type="text"
        className="border w-11/12 mx-auto block my-3 p-2 rounded-lg focus:ring-2 focus:ring-slate-400 focus:border-transparent outline-none md:flex-1"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <button
        className="border px-5 py-2 text-lg rounded-lg bg-black ml-auto mr-5 hover:bg-slate-800 transition-colors duration-200 cursor-pointer"
        onClick={openModal}
      >
        + New Note
      </button>
    </div>
  );
};

export default SearchBar;
